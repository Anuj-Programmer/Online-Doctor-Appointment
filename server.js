require('dotenv').config();
const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors"); 
const connectDB = require("./config/db");


//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors())
app.use(express.json());
app.use(morgan('dev'));
    
app.use('/api/v1/user', require("./routes/userRoutes"))
app.use('/api/v1/doctor', require("./routes/doctorRoutes"))
// app.use('/api/v1/bookings', require("./routes/bookingRoute")) 

//port 
const port = 8081;

//listen port
app.listen(port, () => {
    console.log(`Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`.bgCyan.white
    );
});
