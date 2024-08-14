// server/routes/emailRouter.js
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail', // Or any other email service
  auth: {
    user: process.env.EMAIL_USER, // Use environment variables
    pass: process.env.EMAIL_PASS,
  },
});

// POST endpoint to send email
router.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Setup email data
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender address
    to: process.env.EMAIL_USER, // Change to your recipient address
    subject: 'Contact Us Form Submission',
    html: `
      <h1>Contact Us Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

module.exports = router;
