require('dotenv').config();

const mongoose = require('mongoose');

// Connect to the database using the MONGO_URI from .env
const connectToDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to the database');
    })
    .catch((error) => {
      console.error('Error connecting to the database:', error);
    });
};

module.exports = { connectToDB };
