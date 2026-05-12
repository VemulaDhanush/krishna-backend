const express = require("express");
const router = express.Router();
const Enquiry = require("../models/Enquiry");

// POST enquiry
router.post("/", async (req, res) => {
  try {
    const { name, phone, location, service, message } = req.body;

    const newEnquiry = new Enquiry({
      name,
      phone,
      location,
      service,
      message,
    });

    await newEnquiry.save();

    res.status(201).json({ message: "Enquiry saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error saving enquiry" });
  }
});

// GET enquiries (ADMIN)
router.get("/", async (req, res) => {
  try {
    const enquiries = await Enquiry.find();
    res.json(enquiries);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch enquiries" });
  }
});

module.exports = router;