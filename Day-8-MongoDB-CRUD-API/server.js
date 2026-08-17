require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/students");
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/student_db";
// Middleware
app.use(cors());
app.use(express.json());
// Root route
app.get("/", (req, res) => {
  res.send("MongoDB CRUD API is running. Try /api/students");
});
// Student routes
app.use("/api/students", studentRoutes);
// 404 handler (unknown routes)
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});
// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong on the server",
  });
});
// Connect to MongoDB, then start the server
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  });
