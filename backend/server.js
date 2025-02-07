// /backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const inquiryRoutes = require('./routes/inquiryRoutes');
const { connectToDB } = require('./config/db');

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Connect to the database
connectToDB();

// Use Routes
app.use('/api/inquiries', inquiryRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
