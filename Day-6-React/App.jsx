import { useState } from "react";

import Navbar from "./components/Navbar";
import StudentProfile from "./components/StudentProfile";
import StatsCard from "./components/StatsCard";
import CourseCard from "./components/CourseCard";

import "./App.css";

function App() {
  const [courses, setCourses] = useState([
    { id: 1, name: "Programming Fundamentals", instructor: "TBD", progress: 80, completed: true },
    { id: 2, name: "Computer Arithmetic & Organization (CAO)", instructor: "TBD", progress: 80, completed: true },
    { id: 3, name: "Signals and Systems", instructor: "TBD", progress: 80, completed: true },
    { id: 4, name: "Differential Equations", instructor: "TBD", progress: 80, completed: true },
    { id: 5, name: "Discrete Structures", instructor: "TBD", progress: 80, completed: true },
    { id: 6, name: "Linear Algebra", instructor: "TBD", progress: 80, completed: true },
    { id: 7, name: "Complex Variables", instructor: "TBD", progress: 80, completed: true },
    { id: 8, name: "Object Oriented Programming (OOP)", instructor: "TBD", progress: 80, completed: true },
    { id: 9, name: "Data Structures & Algorithms (DSA)", instructor: "TBD", progress: 80, completed: true },
    { id: 10, name: "Digital Logic Design (DLD)", instructor: "TBD", progress: 80, completed: true },
    { id: 11, name: "Circuit Analysis", instructor: "TBD", progress: 80, completed: false },
    { id: 12, name: "Electronic Devices & Circuits (EDC)", instructor: "TBD", progress: 80, completed: false },
    { id: 13, name: "Calculus I", instructor: "TBD", progress: 80, completed: false },
    { id: 14, name: "Calculus II", instructor: "TBD", progress: 80, completed: false },
    { id: 15, name: "Probability & Statistics", instructor: "TBD", progress: 80, completed: false },
    { id: 16, name: "Computer Networks", instructor: "TBD", progress: 80, completed: false },
    { id: 17, name: "Operating Systems", instructor: "TBD", progress: 80, completed: false },
    { id: 18, name: "Database Systems", instructor: "TBD", progress: 80, completed: false },
    { id: 19, name: "Microprocessors & Interfacing", instructor: "TBD", progress: 80, completed: false },
    { id: 20, name: "Computer Architecture", instructor: "TBD", progress: 80, completed: false },
  ]);

  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleComplete(id) {
    setCourses(
      courses.map((course) =>
        course.id === id ? { ...course, completed: !course.completed } : course
      )
    );
  }

  return (
    <div className="app">
      <Navbar />

      <StudentProfile name="Rukhsana Kanwal" semester="5" department="Computer Engineering" />

      <div className="stats">
        <StatsCard title="Courses" value={courses.length} icon="📚" />
        <StatsCard title="Completed" value={courses.filter((c) => c.completed).length} icon="✅" />
      </div>

      <div className="section-header">
        <h2>My Courses</h2>
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="courses-list">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} onComplete={handleComplete} />
        ))}
      </div>
    </div>
  );
}

export default App;
