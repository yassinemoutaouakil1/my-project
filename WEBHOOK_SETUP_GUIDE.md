# Booking Form Backend Setup Guide

To securely collect your bookings into Google Sheets, send automated email confirmations, and add clients to MailerLite/Brevo (while staying GDPR compliant), you don't need to write backend code. Since your site is HTML/JS, the best approach is to use a free automation platform like **Make.com** (formerly Integromat) or **Zapier** via a **Webhook**.

The forms on your site are already pre-configured to send data via a Webhook. Follow these steps to set it up:

## Step 1: Create a Make.com Account

1. Go to [Make.com](https://www.make.com/) and create a free account.
2. Click on **Create a new scenario**.

## Step 2: Set up the Webhook Trigger

1. Click the large `+` button to add a module and search for **Webhooks**.
2. Select **Custom Webhook**.
3. Click **Add** to create a new webhook. Name it "MouTaouakil Transfers Booking".
4. Make will generate a unique URL (e.g. `https://hook.eu2.make.com/xxxxxxxxxxxx`).
5. **Copy this URL**.

## Step 3: Link the Webhook URL to Your Code

1. Open up your `script.js` file.
2. Scroll to the very bottom to find the `handleBookingSubmit` function.
3. Replace the placeholder URL with your actual URL from Make:

   ```javascript
   const WEBHOOK_URL = 'https://hook.eu2.make.com/xxxxxxxxxxxx'; // Paste your copied URL here
   ```

## Step 4: Map Your Data to Google Sheets

1. Back in Make.com, click the **Webhooks** module and let it "Listen for new data" (click "Redetermine data structure").
2. Go to your local website and submit a test booking form. Make will capture the data (`name`, `email`, `phone`, `pickup`, `destination`, `date`, `gdpr`).
3. In Make, add another module next to your Webhook: **Google Sheets**.
4. Select **Add a Row**.
5. Connect your Google account and select the Spreadsheet/Sheet you want the bookings to save to.
6. Map the incoming data fields (Name, Email, Phone, etc.) to the respective columns in your Google Sheet.

## Step 5: Setup Automatic Email Confirmation (Gmail or Sendinblue/Brevo)

1. Add a third module: **Gmail** (or whichever email provider you prefer).
2. Select **Send an Email**.
3. Map the "To" field to the `email` variable captured by the webhook.
4. Set the Subject to "Booking Confirmation - MouTaouakil Transfers" (or map dynamically based on the `language` field!).
5. Add your personalized HTML message body telling the customer their booking request for `${pickup}` to `${destination}` is received.

## Step 6: Integrate Email Marketing (MailerLite / Brevo)

1. Add a final module, and search for **Brevo** or **MailerLite** depending on your choice.
2. Select the action to **Add/Update a Contact**.
3. *Important Note:* You should use Make's **Filter** function before this module to ensure that the contact is *only* added if the `gdpr` variable equals `yes` or `true`.
4. Map the name and email into your marketing list.

## Step 7: Turn On and Test

Once all modules are mapped successfully, turn the Scenario ON at the bottom left screen in Make.com.

If any webhook failures occur, the JavaScript code is designed to automatically **fallback to WhatsApp** as a precaution so you never lose a lead!
