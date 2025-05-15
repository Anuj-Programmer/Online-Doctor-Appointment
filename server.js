require("dotenv").config(); // ✅ Load environment variables from .env

const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

// 🔍 Debug to ensure env variables are loaded
console.log("Loaded ENV - MONGO_URI:", process.env.MONGO_URI);
console.log("Loaded ENV - PORT:", process.env.PORT);
console.log("Loaded ENV - NODE_ENV:", process.env.NODE_ENV);

// Connect to MongoDB
connectDB();

// Initialize app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use('/api/v1/user', require("./routes/userRoutes"));
app.use('/api/v1/doctor', require("./routes/doctorRoutes"));
app.use('/api/v1/admin', require("./routes/adminRoutes"));
// app.use('/api/v1/bookings', require("./routes/bookingRoute"));

// Port
const port = process.env.PORT || 5000;

// Start server
app.listen(port, () => {
    console.log(
        `✅ Server Running in ${process.env.NODE_ENV} Mode on port ${port}`.bgCyan.white
    );
});
