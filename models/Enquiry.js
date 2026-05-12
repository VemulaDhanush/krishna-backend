const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    service: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt auto
  }
);

module.exports = mongoose.model("Enquiry", enquirySchema);