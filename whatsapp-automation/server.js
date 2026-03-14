/**
 * MouTaouakil Transfers - WhatsApp Bot Server
 * This uses Express to handle webhooks from services like Twilio or MessageBird.
 */

const express = require('express');
const bodyParser = require('body-parser');
const { handleMessage } = require('./bot-logic');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Main Webhook Endpoint
app.post('/whatsapp-webhook', (req, res) => {
    // 1. Get incoming message details
    // (Note: Property names depend on the API provider, e.g., Twilio uses 'From' and 'Body')
    const from = req.body.From || req.body.sender || req.body.phone;
    const body = req.body.Body || req.body.message || req.body.text;

    console.log(`Received message from ${from}: ${body}`);

    // 2. Get bot response
    const botResponse = handleMessage(from, body);

    // 3. Send response back to WhatsApp
    // (This example follows basic JSON response, but you'd use your provider's SDK)
    res.json({
        to: from,
        message: botResponse
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`WhatsApp Bot Server running on port ${PORT}`);
});
