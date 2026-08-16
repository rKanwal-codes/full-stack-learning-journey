const express = require("express");
const cors = require("cors");
const studentRoutes = require("./routes/students");
const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(cors());
app.use(express.json());
// Root route
app.get("/", (req, res) => {
  res.send("Student REST API is running. Try /api/students");
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
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong on the server",
  });
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
