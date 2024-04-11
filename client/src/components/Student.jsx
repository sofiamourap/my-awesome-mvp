import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Student() {
  const [student, setStudent] = useState(null);
  const { id } = useParams();

  const getStudent = async () => {
    try {
      const response = await fetch(`/api/students/${id}`);
      const student = await response.json();
      setStudent(student);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getStudent();
  }, [id]);
  return (
    <div>
      {student && (
        <h4>
          This is the page of {student.firstname} {student.lastname}
        </h4>
      )}
    </div>
  );
}
