const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json());

mongoose.connect(
  "mongodb+srv://Vemula:Dhanush%402006@contractordb.ikzzx8m.mongodb.net/contractorDB"
)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

const enquirySchema = new mongoose.Schema({
  name: String,
  phone: String,
  location: String,
  service: String,
  message: String,
});

const Enquiry = mongoose.model("Enquiry", enquirySchema);

// POST enquiry
app.post("/api/enquiry", async (req, res) => {
  try {

    const newEnquiry = new Enquiry(req.body);

    await newEnquiry.save();

    res.status(201).json({
      message: "Enquiry saved successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Error saving enquiry"
    });

  }
});

// GET enquiries
app.get("/api/enquiry", async (req, res) => {

  const enquiries = await Enquiry.find();

  res.json(enquiries);

});

app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});