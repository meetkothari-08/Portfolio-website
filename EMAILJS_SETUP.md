# EmailJS Setup Instructions

Follow these steps to enable email functionality for your contact form:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

## Step 2: Add Email Service
1. After logging in, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Copy the **Service ID** (you'll need this later)

## Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

**Template Name:** `contact_form`

**Template Content:**
```
New message from your portfolio!

Name: {{name}}
Email: {{email}}

Message:
{{message}}
```

4. Save the template and copy the **Template ID**

## Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (under API Keys section)
3. Copy this key

## Step 5: Update Your Code
Open `src/components/contactform.js` and replace:

```javascript
const SERVICE_ID = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

## Step 6: Test Your Form
1. Start your development server: `npm start`
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check your email inbox!

## Troubleshooting
- **Not receiving emails?** Check your EmailJS dashboard logs
- **CORS errors?** Make sure you're using the correct Public Key
- **Gmail issues?** You may need to enable "Less secure app access" or use an App Password

## Alternative: Using Your Own Email
If you prefer to receive emails at a different address:
1. In EmailJS, go to your email service settings
2. Add your preferred email as the recipient
3. Save changes

That's it! Your contact form will now send you emails whenever someone submits the form.
