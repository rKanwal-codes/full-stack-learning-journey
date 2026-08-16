// In-memory data store (resets when the server restarts)
// Day 7 goal: master REST + CRUD first. Database comes later.

let students = [
  {
    id: 1,
    name: "Rukhsana Kanwal",
    department: "Computer Engineering",
    semester: 5,
  },
  {
    id: 2,
    name: "Ayesha Khan",
    department: "Software Engineering",
    semester: 3,
  },
  {
    id: 3,
    name: "Ali Raza",
    department: "Electrical Engineering",
    semester: 6,
  },
];

// Keeps track of the next id to assign to a new student
let nextId = 4;

module.exports = {
  students,
  getNextId: () => nextId++,
};
