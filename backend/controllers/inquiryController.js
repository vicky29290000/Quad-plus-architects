// /backend/controllers/inquiryController.js

const Inquiry = require('../models/Inquiry');

// Get all inquiries
const getAllInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find();
    res.status(200).json(inquiries);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving inquiries', error });
  }
};

// Create a new inquiry
const createInquiry = async (req, res) => {
  try {
    const { name, email, message, phone } = req.body;

    const newInquiry = new Inquiry({
      name,
      email,
      message,
      phone,
    });

    const savedInquiry = await newInquiry.save();
    res.status(201).json(savedInquiry);
  } catch (error) {
    res.status(500).json({ message: 'Error saving inquiry', error });
  }
};

module.exports = { getAllInquiries, createInquiry };
