# EmailJS Setup Guide for Portfolio Contact Form

## 🚀 Quick Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Set up Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Save your Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```html
Subject: New Contact Form Message from {{user_name}}

Hello Prakash,

You have received a new message from your portfolio contact form:

From: {{user_name}}
Email: {{user_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio website contact form
```

4. **Save your Template ID** (e.g., `template_xyz789`)

### 4. Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `user_abcdefghijk`)

### 5. Update Your Code
Replace these values in `src/pages/Contact.jsx`:

```javascript
// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_abc123';     // Your Service ID
const EMAILJS_TEMPLATE_ID = 'template_xyz789';   // Your Template ID  
const EMAILJS_PUBLIC_KEY = 'user_abcdefghijk';   // Your Public Key
```

### 6. Enable the EmailJS Code
In `src/pages/Contact.jsx`:

1. **Uncomment the import** (line 3):
   ```javascript
   import emailjs from '@emailjs/browser';
   ```

2. **Comment out the demo simulation** (lines 60-74):
   ```javascript
   // Comment out or delete this demo block:
   // setTimeout(() => {
   //   setStatus({ 
   //     type: 'success', 
   //     message: 'Thank you! Your message has been sent successfully...' 
   //   });
   //   setIsLoading(false);
   //   setFormData({...});
   // }, 2000);
   ```

3. **Uncomment the EmailJS code block** (lines 76-101):
   - Remove the `/*` and `*/` comment markers
   - Remove the `const emailjs = require('@emailjs/browser');` line (since it's imported at top)

## 📧 Gmail Setup (Most Common)

### For Gmail Users:
1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account Settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
   - Use this password in EmailJS (not your regular Gmail password)

### EmailJS Gmail Configuration:
- **Service**: Gmail
- **Email**: your-email@gmail.com
- **Password**: Use the App Password generated above

## 🎯 Template Variables

The form sends these variables to your email template:
- `{{user_name}}` - Visitor's name
- `{{user_email}}` - Visitor's email
- `{{subject}}` - Message subject (optional)
- `{{message}}` - Main message content

## 🔧 Testing Your Setup

1. **Test in EmailJS Dashboard**:
   - Go to your template
   - Click "Test it"
   - Fill in sample data
   - Check if email arrives

2. **Test Your Contact Form**:
   - Fill out your portfolio contact form
   - Submit the message
   - Check your email inbox
   - Verify all information appears correctly

## 📱 Features Included in Your New Contact Form

✅ **Functional Features:**
- EmailJS integration for real email sending
- Form validation (name, email format, message required)
- Loading states with spinner
- Success/error messages with icons
- Form reset after successful submission
- Controlled inputs with state management

✅ **UI/UX Features:**
- Modern glassmorphism design
- Fully responsive (mobile, tablet, desktop)
- Smooth animations with Framer Motion
- Gradient backgrounds and hover effects
- Interactive social media links
- Availability status indicator
- Professional contact information layout

✅ **Responsive Design:**
- Mobile-first approach
- Stacked layout on small screens
- Side-by-side layout on large screens
- Responsive typography and spacing
- Touch-friendly buttons and inputs

## 🎨 Customization Options

### Colors & Styling:
- Modify gradient colors in the form and buttons
- Adjust glassmorphism opacity levels
- Change animation timings and effects

### Content:
- Update contact information
- Modify social media links
- Change availability status
- Customize success/error messages

## 🔒 Security Notes

- EmailJS handles email sending securely
- Your email credentials are stored in EmailJS, not in your code
- Public key is safe to expose in frontend code
- Consider rate limiting for production use

## 🚨 Troubleshooting

### Common Issues:
1. **Emails not sending**: Check service configuration and credentials
2. **Template variables not working**: Ensure variable names match exactly
3. **Gmail issues**: Use App Password, not regular password
4. **CORS errors**: EmailJS handles CORS automatically

### Debug Steps:
1. Check browser console for error messages
2. Test template in EmailJS dashboard first
3. Verify all IDs are correct (service, template, public key)
4. Check spam folder for test emails

## 📞 Support

- **EmailJS Documentation**: [docs.emailjs.com](https://www.emailjs.com/docs/)
- **EmailJS Support**: Available through their dashboard
- **Community**: Stack Overflow with `emailjs` tag

---

**Ready to go live!** Once configured, your contact form will be fully functional and professional! 🎉