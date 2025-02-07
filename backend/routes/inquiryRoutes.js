// /backend/routes/inquiryRoutes.js

const express = require('express');
const router = express.Router();
const { getAllInquiries, createInquiry } = require('../controllers/inquiryController');

// Get all inquiries
router.get('/', getAllInquiries);

// Create a new inquiry
router.post('/', createInquiry);

module.exports = router;
