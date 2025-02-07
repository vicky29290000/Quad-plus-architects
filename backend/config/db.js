require('dotenv').config();

const mongoose = require('mongoose');

// Connect to the database using the MongoDB URI
const connectToDB = () => {
  mongoose
    .connect('mongodb+srv://vigneshnehru38:U8pWXCTpNtiNIBcS@cluster0.wkn0x.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to the database');
    })
    .catch((error) => {
      console.error('Error connecting to the database:', error);
    });
};

module.exports = { connectToDB };
