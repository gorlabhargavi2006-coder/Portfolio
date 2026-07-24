const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contact');

// Load environment variables
dotenv.config();

const app = express();

// Middlewares
app.use(cors()); // Allow requests from all origins (including our React Vite client)
app.use(express.json()); // Body parser

// Connect to Database
connectDB();

// Base Route for Health / Recruiter Check
app.get('/', (req, res) => {
  res.status(200).json({
    name: "Gorla Bhargavi Portfolio API",
    status: "online",
    message: "The backend server is running and ready to handle contact requests.",
    version: "1.0.0",
    techStack: ["Node.js", "Express.js", "MongoDB", "Nodemailer"]
  });
});

// API Routes
app.use('/api/contact', contactRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('[Server Error]', err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});

// Define Port
const PORT = process.env.PORT || 5000;

// Listen to incoming requests
const server = app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`Express Server Bootstrapped Successfully!`);
  console.log(`Local Access:  http://localhost:${PORT}`);
  console.log(`Health Check:  http://localhost:${PORT}/`);
  console.log(`======================================================\n`);
});
