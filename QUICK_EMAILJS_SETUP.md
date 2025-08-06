# 🚀 Quick EmailJS Setup - Get Real Emails in 5 Minutes!

## Step 1: Create EmailJS Account (2 minutes)
1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up"** and create account with your email
3. Verify your email address

## Step 2: Add Email Service (1 minute)
1. In EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"** (most common)
4. Fill in:
   - **Service ID**: `service_prakash` (you can choose any name)
   - **Email**: `nomulajyothiprakash@gmail.com` (your email)
   - **Password**: Use App Password (see below)

### For Gmail App Password:
1. Go to your Google Account settings
2. Security → 2-Step Verification (enable if not already)
3. App passwords → Generate password for "Mail"
4. Use this generated password (not your regular Gmail password)

## Step 3: Create Email Template (1 minute)
1. Click **"Email Templates"**
2. Click **"Create New Template"**
3. **Template ID**: `template_contact` (you can choose any name)
4. **Template content**:

```
Subject: New message from {{user_name}} - Portfolio Contact

Hello Prakash,

You received a new message from your portfolio website:

Name: {{user_name}}
Email: {{user_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

## Step 4: Get Your Public Key (30 seconds)
1. Go to **"Account"** → **"General"**
2. Copy your **Public Key** (starts with something like `user_`)

## Step 5: Update Your Code (30 seconds)
Replace the values in your `Contact.jsx` file:

```javascript
const EMAILJS_SERVICE_ID = 'service_prakash';        // Your service ID
const EMAILJS_TEMPLATE_ID = 'template_contact';      // Your template ID  
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';   // Your public key
```

## Step 6: Enable EmailJS Code (30 seconds)
1. Uncomment line 3: `import emailjs from '@emailjs/browser';`
2. Comment out the demo code (lines 60-74)
3. Uncomment the real EmailJS code (lines 76-101)

## ✅ Test It!
1. Fill out your contact form
2. Check your Gmail inbox
3. You should receive the email!

---

**Need help?** Check the detailed guide in `EMAILJS_SETUP_GUIDE.md`