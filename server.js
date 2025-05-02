const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const connectDB = require("./config/db");

//dotenv.config
dotenv.config();

//mongodb connection
connectDB();
console.log(process.env.EMAIL, process.env.EMAIL_PASSWORD);

//rest object
const app = express();

//middlewares
app.use(cors({ origin: '*' }));  // Allow all origins for development
app.use(express.json());
app.use(morgan("dev"));

// Mock database for OTP (in-memory)
let otpStore = {};

// Route to send OTP
app.post("/api/v1/user/send-otp", async (req, res) => {
  const { email, name } = req.body;
  if (!email || !name) {
    return res.status(400).json({ success: false, message: "Name and email are required" });
  }

  try {
    const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false }); // 6-digit OTP

    // Store OTP temporarily in memory
    otpStore[email] = otp;

    // Setup nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // Your email here
        pass: process.env.EMAIL_PASSWORD, // Your email password here
      },
    });

    // Send OTP email
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Your OTP Code",
      text: `Hello ${name},\n\nYour OTP code is: ${otp}\n\nThank you!`,
    });

    return res.status(200).json({ success: true, message: "OTP sent successfully!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
});

// Route to verify OTP
app.post("/api/v1/user/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  
  if (!otpStore[email] || otpStore[email] !== otp) {
    return res.status(400).json({ success: false, message: "Invalid OTP" });
  }

  // OTP verified, delete from memory
  delete otpStore[email];
  
  return res.status(200).json({ success: true, message: "OTP verified successfully!" });
});

// Route to register user
app.post("/api/v1/user/register", async (req, res) => {
  const { name, email, password } = req.body;

  // Check if all fields are provided
  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: "Name, email, and password are required" });
  }

  try {
    // Simulate user registration. In a real application, you'd save the user to a database.
    // For now, we just mock a successful response.
    console.log(`User Registered: ${name}, ${email}`);

    return res.status(200).json({ success: true, message: "User registered successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to register user" });
  }
});

// Fallback route for undefined paths
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

//port 
const port = process.env.PORT || 8080;

//listen port
app.listen(port, () => {
  console.log(`Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`.bgCyan.white);
});
