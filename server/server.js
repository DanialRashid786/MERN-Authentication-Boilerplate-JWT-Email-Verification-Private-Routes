const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/connection');
const cors = require('cors');
const cookieParser=require('cookie-parser');

const bodyParser = require('body-parser');
const testRoutes = require('./routes/testRoutes');

const { notFound, errorHandler } =require('./middlewares/errorMiddleware.js');
const userRoutes = require('./routes/userRoutes.js');



dotenv.config();

// Now load the environment-specific .env file based on NODE_ENV
const env = process.env.NODE_ENV || 'development'; // Default to 'development' if not set
dotenv.config({
  path: path.resolve(__dirname, `.env.${env}`) // Load the appropriate .env file based on NODE_ENV
});

const app = express();
const PORT = process.env.PORT || 8000;

// Global Middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(
  cors({
    origin: process.env.ORIGIN || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specified HTTP methods
    credentials: true, // Allow cookies with cross-origin requests
  })
);

app.use(bodyParser.json());

// Database Connection

connectDB()
  .then(() => console.log('Database connected successfully'))
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process if the database connection fails
  });



app.use('/api',testRoutes);

app.use('/api/users', userRoutes);


app.use(notFound);
app.use(errorHandler);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
});
