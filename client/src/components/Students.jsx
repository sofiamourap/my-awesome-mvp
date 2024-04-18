import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Students() {
  const [students, setStudents] = useState([]);

  const getStudents = async () => {
    try {
      const response = await fetch("/api/students");
      const students = await response.json();
      setStudents(students);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div>
      Students
      <hr />
      {students.map((student) => (
        <div key={student.id}>
          <Link to={`/students/${student.id}`}>
            {student.firstname} {student.lastname}
          </Link>
        </div>
      ))}
      <hr />
      <Outlet />
    </div>
  );
}
