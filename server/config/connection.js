const mongoose = require('mongoose');

/**
 * Connect to MongoDB database.
 * Ensures a connection is only made once and handles reconnection automatically.
 */
const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log('MongoDB is already connected.');
    return mongoose.connection;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URL); // No need for useNewUrlParser and useUnifiedTopology
    console.log(`MongoDB connected successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit the process if the DB connection fails
  }
};

// Graceful shutdown on SIGINT (Ctrl+C)
process.on('SIGINT', async () => {
  try {
    await mongoose.connection.close();
    console.log('MongoDB connection closed due to app termination');
    process.exit(0);
  } catch (error) {
    console.error('Error closing MongoDB connection:', error.message);
    process.exit(1);
  }
});

module.exports = connectDB;
