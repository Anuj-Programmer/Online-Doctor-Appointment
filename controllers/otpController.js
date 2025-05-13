const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const userModel = require("../models/userModels");

// In-memory OTP store: { [email]: { otp, name, password, createdAt } }
let otpStore = {};

// Helper: Check if OTP is expired (5 minutes = 300000 ms)
const isOtpExpired = (createdAt) => Date.now() - createdAt > 5 * 60 * 1000;

exports.sendOtpController = async (req, res) => {
  console.log("helllo")
  try {

    console.log("helllo")
    const { email, name, password } = req.body;

    if (!email || !name || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    console.log("Checking for existing user with email:", email);
    const existingUser = await userModel.findOne({ email });
    console.log("Existing user found:", existingUser);
    if (existingUser) {
      return res.status(409).json({ success: false, message: "User already exists" });
    }

    const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false });
    otpStore[email] = { otp, name, password, createdAt: Date.now() };

    console.log("Otp store", otpStore)

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP Code",
      text: `Hello ${name},\n\nYour OTP code is: ${otp}\n\nThis OTP will expire in 5 minutes.`,
    });

    return res.status(200).json({ success: true, message: "OTP sent successfully!" });
  } catch (error) {
    console.error("Error in sendOtpController:", error);
    return res.status(500).json({ success: false, message: "Failed to send OTP." });
  }
};

exports.verifyOtpController = async (req, res) => {
  try {
    const { name, email, password, otp } = req.body;

    // if (!email || !otp) {
    //   return res.status(400).json({ success: false, message: "Email and OTP are required" });
    // }
    
    // const record = otpStore[email];
    // console.log("Record", otpStore)
    // if (!record) {
    //   return res.status(400).json({ success: false, message: "OTP not found. Please request again." });
    // }

    // if (isOtpExpired(record.createdAt)) {
    //   delete otpStore[email];
    //   return res.status(400).json({ success: false, message: "OTP has expired. Please request a new one." });
    // }

    // if (record.otp !== otp) {
    //   return res.status(400).json({ success: false, message: "Invalid OTP" });
    // }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      name: name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    delete otpStore[email]; // Clean up used OTP

    return res.status(201).json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error("Error in verifyOtpController:", error);
    return res.status(500).json({ success: false, message: "Failed to verify OTP." });
  }
};
