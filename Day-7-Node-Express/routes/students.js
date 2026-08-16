const express = require("express");
const router = express.Router();

const {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

// GET    /api/students       -> all students
// GET    /api/students/:id   -> single student
// POST   /api/students       -> create student
// PUT    /api/students/:id   -> update student
// DELETE /api/students/:id   -> delete student

router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.post("/", createStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
