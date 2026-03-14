# 🇲🇦 MouTaouakil Transfers - WhatsApp Automation Bot

This project contains the source code for a smart, luxury-toned WhatsApp automation bot designed to convert inquiries into confirmed bookings.

## 🚀 Features

- **Instant Welcome**: Auto-replies as soon as a client messages.
- **Smart Flow**: Guided booking for Airports, Cities, and Private Drivers.
- **Price Estimation**: Real-time quotes for common Moroccan routes.
- **Multilingual**: Automatic support for English, French, and Arabic.
- **Human Handoff**: Alerts the admin and transfers complex queries to a real agent.

## 📂 Project Structure

- `translations.json`: All bot messages in 3 languages.
- `prices.json`: Pricing data for common transfers (RAK, CMN, FEZ).
- `bot-logic.js`: The state machine handling user conversations.
- `server.js`: Webhook handler for external WhatsApp APIs.

## 🛠️ Deployment Steps

1. **Host this Code**: Deploy to a server (Heroku, DigitalOcean, or AWS).
2. **Choose a Provider**:
   - **Twilio**: Professional, scalable, but requires Business API approval.
   - **whatsapp-web.js**: Free, uses a real WhatsApp number, but requires a dedicated server.
3. **Configure Webhook**: Link your provider to the `https://your-server.com/whatsapp-webhook` endpoint.
4. **Update Admin Alerts**: In `bot-logic.js`, update the `notifyAdmin` function to send you a notification (Email/SMS/Telegram).

## 💎 Tone Guidelines

- Use emojis sparingly but effectively (🇲🇦, 🚗, ✨).
- Always maintain a professional, high-end "VIP" tone.
- Be concise but helpful.

---
*Created for MouTaouakil Transfers - Luxury Travel Morocco.*
