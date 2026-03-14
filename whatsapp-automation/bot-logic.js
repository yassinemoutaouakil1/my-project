/**
 * MouTaouakil Transfers - WhatsApp Bot Logic
 * This is a state machine to handle client conversations.
 */

const translations = require('./translations.json');
const prices = require('./prices.json');

// Mock memory for user states (In production, use Redis or a Database)
const userSessions = {};

/**
 * Main handler for incoming messages
 * @param {string} from - The sender's phone number
 * @param {string} message - The message body
 */
function handleMessage(from, message) {
    // 1. Initialize or get session
    if (!userSessions[from]) {
        userSessions[from] = { state: 'START', lang: 'en', data: {} };
    }

    const session = userSessions[from];
    const text = message.trim();
    let response = "";

    // Language Detection (Simple check for Arabic characters)
    if (/[\u0600-\u06FF]/.test(text)) {
        session.lang = 'ar';
    }

    // State Machine
    switch (session.state) {
        case 'START':
            response = translations[session.lang].welcome;
            session.state = 'SELECT_SERVICE';
            break;

        case 'SELECT_SERVICE':
            if (text === '1') {
                session.data.service = 'Airport Transfer';
                response = translations[session.lang].airport_pickup;
                session.state = 'AIRPORT_PICKUP';
            } else if (text === '2') {
                session.data.service = 'City Transfer';
                response = translations[session.lang].dest_city;
                session.state = 'DEST_CITY';
            } else if (text === '3') {
                session.data.service = 'Private Chauffeur';
                response = translations[session.lang].city;
                session.state = 'CHAUFFEUR_CITY';
            } else if (text === '4') {
                session.data.service = 'Custom Tour';
                response = translations[session.lang].custom_plan;
                session.state = 'CUSTOM_PLAN';
            } else {
                response = "Please select a valid option (1, 2, 3, or 4).";
            }
            break;

        case 'AIRPORT_PICKUP':
            session.data.pickup = text;
            response = translations[session.lang].dest_city;
            session.state = 'DEST_CITY';
            break;

        case 'DEST_CITY':
            session.data.destination = text;
            response = translations[session.lang].date_time;
            session.state = 'GET_DATE';
            break;

        case 'GET_DATE':
            session.data.dateTime = text;
            response = translations[session.lang].passengers;
            session.state = 'GET_PASSENGERS';
            break;

        case 'GET_PASSENGERS':
            session.data.passengers = text;
            // Transition to price estimation
            const estPrice = estimatePrice(session.data);
            response = translations[session.lang].price_offer
                .replace('{route}', `${session.data.pickup || ''} ➡️ ${session.data.destination}`)
                .replace('{price}', estPrice);
            session.state = 'CONFIRM_BOOKING';
            break;

        case 'CHAUFFEUR_CITY':
            session.data.city = text;
            response = translations[session.lang].duration;
            session.state = 'GET_DURATION';
            break;

        case 'GET_DURATION':
            session.data.duration = text;
            const chauffPrice = parseInt(text) * prices.hourly_rate || prices.daily_rate;
            response = translations[session.lang].price_offer
                .replace('{route}', `Chauffeur in ${session.data.city}`)
                .replace('{price}', chauffPrice);
            session.state = 'CONFIRM_BOOKING';
            break;

        case 'CUSTOM_PLAN':
            session.data.plan = text;
            response = translations[session.lang].handoff;
            session.state = 'HANDOFF';
            notifyAdmin(from, session.data);
            break;

        case 'CONFIRM_BOOKING':
            if (text === '1') {
                response = translations[session.lang].confirmed.replace('{service}', session.data.service);
                notifyAdmin(from, session.data);
                session.state = 'DONE';
            } else {
                response = translations[session.lang].handoff;
                session.state = 'HANDOFF';
                notifyAdmin(from, session.data);
            }
            break;

        default:
            response = translations[session.lang].welcome;
    }

    return response;
}

/**
 * Simple Price Estimator
 */
function estimatePrice(data) {
    // Check specific airport routes
    const key = `${data.pickup}_${data.destination}`.replace(/ /g, '_');
    if (prices.airport_transfers[key]) return prices.airport_transfers[key];

    // Check inter-city
    const cityKey = `${data.pickup}_${data.destination}`.replace(/ /g, '_');
    if (prices.city_transfers[cityKey]) return prices.city_transfers[cityKey];

    // Fallback default
    return 80;
}

function notifyAdmin(from, data) {
    console.log(`[ADMIN NOTIFICATION] New Booking from ${from}:`, data);
    // In production, send email, Telegram, or another WhatsApp message to the admin.
}

module.exports = { handleMessage };
