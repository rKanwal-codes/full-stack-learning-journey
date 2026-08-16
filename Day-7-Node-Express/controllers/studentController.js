const { students, getNextId } = require("../data/students");

// GET all students
function getAllStudents(req, res) {
  res.status(200).json({
    success: true,
    count: students.length,
    data: students,
  });
}

// GET a single student by id
function getStudentById(req, res) {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({
      success: false,
      message: `Student with id ${id} not found`,
    });
  }

  res.status(200).json({
    success: true,
    data: student,
  });
}

// POST a new student
function createStudent(req, res) {
  const { name, department, semester } = req.body;

  if (!name || !department || !semester) {
    return res.status(400).json({
      success: false,
      message: "Please provide name, department, and semester",
    });
  }

  const newStudent = {
    id: getNextId(),
    name,
    department,
    semester,
  };

  students.push(newStudent);

  res.status(201).json({
    success: true,
    message: "Student created successfully",
    data: newStudent,
  });
}

// PUT update an existing student
function updateStudent(req, res) {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({
      success: false,
      message: `Student with id ${id} not found`,
    });
  }

  const { name, department, semester } = req.body;

  if (name !== undefined) student.name = name;
  if (department !== undefined) student.department = department;
  if (semester !== undefined) student.semester = semester;

  res.status(200).json({
    success: true,
    message: "Student updated successfully",
    data: student,
  });
}

// DELETE a student
function deleteStudent(req, res) {
  const id = Number(req.params.id);
  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: `Student with id ${id} not found`,
    });
  }

  const deleted = students.splice(index, 1)[0];

  res.status(200).json({
    success: true,
    message: "Student deleted successfully",
    data: deleted,
  });
}

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
