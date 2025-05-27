# Email Notification Setup Guide

## Quick Setup Options

### Option 1: Formspree (Easiest - No coding required)
1. Go to https://formspree.io/
2. Sign up for a free account
3. Create a new form and get your form endpoint
4. Replace the API routes with a simple form submission to Formspree

### Option 2: Gmail + Nodemailer (Free)
1. Create a Gmail app password
2. Install nodemailer: `npm install nodemailer`
3. Add environment variables:
   \`\`\`
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-app-password
   \`\`\`
4. Update the email functions to use Nodemailer

### Option 3: Resend (Recommended for production)
1. Sign up at https://resend.com/
2. Get your API key
3. Install Resend: `npm install resend`
4. Add environment variable:
   \`\`\`
   RESEND_API_KEY=your-resend-api-key
   \`\`\`
5. Uncomment the Resend code in the API routes

### Option 4: Webhook Services (Very Easy)
1. Use Zapier or Make.com
2. Create a webhook that sends emails
3. Point your forms to the webhook URL

## Current Setup
- Forms submit to `/api/contact` and `/api/quote`
- Email notifications are logged to console (for testing)
- Replace the `sendEmailNotification` function with your preferred email service

## Testing
1. Fill out a form on your site
2. Check the browser console or server logs
3. You should see the email content that would be sent

## Production Setup
1. Choose one of the options above
2. Replace `your-email@example.com` with your actual email
3. Update the `sendEmailNotification` function
4. Test thoroughly before going live
