const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const enquiryRoutes = require("./routes/enquiryRoutes");

const app = express();
const PORT = 5000;

// connect DB
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/enquiry", enquiryRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});