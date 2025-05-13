const express = require('express');
const otpGenerator = require('otp-generator');
const nodemailer = require('nodemailer');
const User = require('../models/userModels');
const { verifyOtpController } = require('../controllers/otpController');

const router = express.Router();

// In-memory OTP store
let otpStore = {};

// Email sender
const sendOtp = async (email) => {
  const otp = otpGenerator.generate(6, {
    digits: true,
    upperCaseAlphabets: false,
    specialChars: false,
  });

  otpStore[email] = { otp, createdAt: Date.now() };

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP',
    text: `Your OTP is ${otp}`,
  };

  await transporter.sendMail(mailOptions);
  console.log('OTP sent successfully');
};

// Request OTP route
router.post('/request-otp', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: 'Email is required' });

    // const user = await User.findOne({ email });
    // if (!user) return res.status(404).json({ message: 'User not found' });

    await sendOtp(email);
    res.status(200).json({ message: 'OTP sent successfully', success: true });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ message: 'Error sending OTP', success: false });
  }
});

router.post('/verify-otp', verifyOtpController)

module.exports = router;
