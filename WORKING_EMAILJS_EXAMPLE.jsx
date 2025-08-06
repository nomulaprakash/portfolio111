// This is a working example of how to implement EmailJS in your Contact.jsx
// Copy this code and replace the relevant parts in your Contact.jsx

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'; // Make sure this is uncommented
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });

  // ⚠️ REPLACE THESE WITH YOUR ACTUAL EMAILJS VALUES
  const EMAILJS_SERVICE_ID = 'service_prakash';      // Your Gmail service ID
  const EMAILJS_TEMPLATE_ID = 'template_contact';    // Your template ID
  const EMAILJS_PUBLIC_KEY = 'your_public_key_here'; // Your public key from EmailJS

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (status.message) setStatus({ type: '', message: '' });
  };

  const validateForm = () => {
    if (!formData.user_name.trim()) {
      setStatus({ type: 'error', message: 'Please enter your name' });
      return false;
    }
    if (!formData.user_email.trim()) {
      setStatus({ type: 'error', message: 'Please enter your email' });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' });
      return false;
    }
    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please enter your message' });
      return false;
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    setStatus({ type: '', message: '' });

    // This is the actual EmailJS implementation
    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_PUBLIC_KEY)
      .then((result) => {
        console.log('✅ Email sent successfully:', result.text);
        setStatus({ 
          type: 'success', 
          message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!' 
        });
        setFormData({
          user_name: '',
          user_email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('❌ Email failed:', error);
        setStatus({ 
          type: 'error', 
          message: 'Oops! Something went wrong. Please try again or contact me directly at nomulajyothiprakash@gmail.com' 
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // ... rest of your component code stays the same
  
  return (
    <section className="min-h-screen py-20 px-4 bg-transparent text-white">
      {/* Your existing JSX structure */}
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <input
          type="text"
          name="user_name"
          value={formData.user_name}
          onChange={handleInputChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="user_email"
          value={formData.user_email}
          onChange={handleInputChange}
          placeholder="your@email.com"
          required
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          placeholder="Subject"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Your message..."
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default Contact;