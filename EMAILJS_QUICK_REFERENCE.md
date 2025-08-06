# 📋 EmailJS Quick Reference

## ✅ What You Need to Complete:

### 1. EmailJS Account Setup
- [ ] Create account at https://www.emailjs.com/
- [ ] Verify your email address
- [ ] Log in to dashboard

### 2. Gmail App Password
- [ ] Go to Google Account → Security
- [ ] Enable 2-Step Verification
- [ ] Generate App Password for "Mail"
- [ ] Save the 16-character password

### 3. EmailJS Service Setup
- [ ] Add Gmail service with ID: `service_prakash`
- [ ] Use your Gmail: `nomulajyothiprakash@gmail.com`
- [ ] Use the App Password (not regular password)
- [ ] Test connection shows "Connected" ✅

### 4. Email Template Setup
- [ ] Create template with ID: `template_contact`
- [ ] Subject: `New message from {{user_name}} - Portfolio Contact`
- [ ] Use the template content provided above
- [ ] Test template with sample data

### 5. Get Public Key
- [ ] Go to Account → General
- [ ] Copy your Public Key (starts with `user_`)

### 6. Update Your Code
- [ ] Replace `'YOUR_ACTUAL_PUBLIC_KEY_HERE'` with your real key
- [ ] Change `USE_DEMO_MODE = true` to `USE_DEMO_MODE = false`

## 🧪 Final Test:
1. Fill out your contact form
2. Submit message
3. Check your Gmail inbox
4. You should receive the email! 📧

## 🚨 Troubleshooting:
- **No email received**: Check spam folder
- **"Invalid public key"**: Double-check you copied the full key
- **"Service not found"**: Make sure Service ID is exactly `service_prakash`
- **"Template not found"**: Make sure Template ID is exactly `template_contact`
- **Gmail connection failed**: Use App Password, not regular password

## 📞 Need Help?
Check the browser console (F12) for error messages when testing the form.