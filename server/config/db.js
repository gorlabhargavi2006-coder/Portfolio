const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connStr = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';
    
    // Set connection options
    const options = {
      serverSelectionTimeoutMS: 5000 // 5 seconds timeout
    };

    console.log(`Attempting to connect to MongoDB...`);
    const conn = await mongoose.connect(connStr, options);
    console.log(`MongoDB Connected successfully to host: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.error(`\n======================================================`);
    console.error(`WARNING: MongoDB connection failed!`);
    console.error(`Error details: ${error.message}`);
    console.error(`======================================================`);
    console.error(`Note: The server will run in "Simulated Offline Database Mode".`);
    console.error(`All form submissions will still succeed and display on console.`);
    console.error(`======================================================\n`);
    return false;
  }
};

module.exports = connectDB;
