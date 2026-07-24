const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const ContactMessage = require('../models/ContactMessage');
const mongoose = require('mongoose');

// In-memory fallback database for offline testing
const localMessageStore = [];

router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // 1. Basic Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  if (message.length < 10) {
    return res.status(400).json({ error: 'Message must be at least 10 characters long' });
  }

  let dbSaved = false;

  // 2. Attempt saving to MongoDB (if connected)
  if (mongoose.connection.readyState === 1) {
    try {
      const newMessage = new ContactMessage({ name, email, subject, message });
      await newMessage.save();
      dbSaved = true;
      console.log(`[Database] Submission successfully saved to MongoDB (ID: ${newMessage._id})`);
    } catch (dbError) {
      console.error('[Database] Failed to save submission:', dbError.message);
    }
  }

  // Fallback storage if DB is not connected
  if (!dbSaved) {
    const backupMessage = {
      _id: `offline_${Date.now()}`,
      name,
      email,
      subject,
      message,
      createdAt: new Date()
    };
    localMessageStore.push(backupMessage);
    console.log(`[Offline Storage] DB is offline. Saved submission to memory. Total buffered: ${localMessageStore.length}`);
    console.log(`Submission data:`, backupMessage);
  }

  // 3. Nodemailer dispatch setup
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const receiverEmail = process.env.RECEIVER_EMAIL || 'gorlabhargavi2006@gmail.com';

  const hasCredentials = emailUser && emailPass && emailPass !== 'your_gmail_app_password_here';

  if (hasCredentials) {
    try {
      // Create transport
      const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE || 'gmail',
        auth: {
          user: emailUser,
          pass: emailPass
        }
      });

      // Compose email details
      const mailOptions = {
        from: `Portfolio Contact Form <${emailUser}>`,
        to: receiverEmail,
        replyTo: email,
        subject: `[Portfolio Contact] ${subject} - from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #ddd; border-radius: 8px;">
            <h2 style="color: #6C63FF; border-bottom: 2px solid #00D4FF; padding-bottom: 10px;">New Message from Portfolio Website</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #FF6B6B;">
              ${message.replace(/\n/g, '<br>')}
            </div>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
            <p style="font-size: 11px; color: #888;">This message was submitted via the contact form on Gorla Bhargavi's portfolio website.</p>
          </div>
        `
      };

      await transporter.sendMail(mailOptions);
      console.log(`[Email] Notification email successfully sent to ${receiverEmail}`);
    } catch (emailError) {
      console.error('[Email] Failed to send notification email:', emailError.message);
      // We don't return an error status here because the message was successfully stored
    }
  } else {
    // Log simulated output to console
    console.log(`\n======================================================`);
    console.log(`[Simulated Email Notification]`);
    console.log(`To: ${receiverEmail}`);
    console.log(`From: ${email}`);
    console.log(`Subject: [Portfolio Contact] ${subject}`);
    console.log(`Message Body:`);
    console.log(message);
    console.log(`======================================================`);
    console.log(`Notice: SMTP credentials not configured in server/.env. Skipping real mail dispatch.`);
    console.log(`======================================================\n`);
  }

  // 4. Return success response
  return res.status(200).json({
    success: true,
    message: 'Message registered successfully.',
    savedToDb: dbSaved
  });
});

module.exports = router;
