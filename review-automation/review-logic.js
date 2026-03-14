/**
 * MouTaouakil Transfers - Review Collection Logic
 */

const translations = {
    en: {
        ask_feedback: "How was your trip with MouTaouakil Transfers? 🇲🇦\n\n1️⃣ Excellent! 🌟\n2️⃣ Could be better...",
        excellent_reply: "We're thrilled you enjoyed it! Your support means the world to us. Could you leave a quick 5-star review on Google? ✨\n🔗 [Google Review Link]",
        improvement_reply: "We are sorry to hear that. Your satisfaction is our priority. Please tell us what went wrong here: [Private Feedback Link]",
        reminder: "Hi! Just a friendly reminder to share your experience with us. It only takes a minute! 🚗💨"
    },
    fr: {
        ask_feedback: "Comment s'est passé votre voyage avec MouTaouakil Transfers ? 🇲🇦\n\n1️⃣ Excellent ! 🌟\n2️⃣ Pourrait être mieux...",
        excellent_reply: "Nous sommes ravis que vous ayez apprécié ! Votre soutien est précieux. Pourriez-vous nous laisser un avis 5 étoiles sur Google ? ✨\n🔗 [Lien Google Review]",
        improvement_reply: "Nous sommes désolés d'apprendre cela. Votre satisfaction est notre priorité. Dites-nous ce qui n'a pas été ici : [Lien Feedback Privé]",
        reminder: "Bonjour ! Un petit rappel pour partager votre expérience avec nous. Cela ne prend qu'une minute ! 🚗💨"
    }
};

const bookings = []; // Mock database of completed bookings

/**
 * Schedule a review request
 * @param {Object} booking - { id, phone, email, lang, completionTime }
 */
function scheduleReviewRequest(booking) {
    console.log(`[REVIEW] Scheduled 30m request for ${booking.phone}`);

    // Logic for 30 min trigger
    setTimeout(() => {
        sendRequest(booking, 'initial');
    }, 30 * 60 * 1000);

    // Logic for 24h reminder (if no response)
    setTimeout(() => {
        if (!booking.responded) {
            sendRequest(booking, 'reminder');
        }
    }, 24 * 60 * 60 * 1000);
}

function sendRequest(booking, type) {
    const lang = booking.lang || 'en';
    const msg = type === 'initial' ? translations[lang].ask_feedback : translations[lang].reminder;

    console.log(`[SENDING ${booking.phone}] ${msg}`);
    // In production, integrate with Twilio (WhatsApp/SMS) and SendGrid (Email)
}

function handleReviewResponse(phone, response) {
    const booking = bookings.find(b => b.phone === phone);
    if (!booking) return;

    booking.responded = true;
    const lang = booking.lang || 'en';

    if (response === '1') {
        return translations[lang].excellent_reply;
    } else {
        return translations[lang].improvement_reply;
    }
}

module.exports = { scheduleReviewRequest, handleReviewResponse };
