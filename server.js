require("dotenv").config(); // ✅ Load environment variables from .env

const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const otpRoutes = require('./routes/otpRoutes');


// 🔍 Debug to ensure env variables are loaded
console.log("Loaded ENV - MONGO_URI:", process.env.MONGO_URI);
console.log("Loaded ENV - PORT:", process.env.PORT);
console.log("Loaded ENV - NODE_ENV:", process.env.NODE_ENV);

// Load environment variables
dotenv.config();

// MongoDB connection
connectDB();

// Initialize Express app
const app = express();

// Middlewares
app.use(cors()); // You can customize the CORS options here if needed
app.use(express.json());
app.use(morgan('dev'));

// Import routes
app.use('/api/v1/user', require("./routes/userRoutes"));
app.use('/api/v1/doctor', require("./routes/doctorRoutes"));
app.use('/api/v1/admin', require("./routes/adminRoutes"));
app.use('/api/v1/user',require("./routes/otpRoutes"));
// app.use('/api/v1/bookings', require("./routes/bookingRoute"));

// Error Handling Middleware (Optional but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Something went wrong!', error: err.message });
});

// Port configuration
const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => {
  console.log(`Server Running in ${process.env.NODE_ENV} Mode on port ${port}`.bgCyan.white);
});
