import { useEffect, useState } from "react";

function Students({ goHome }) {

    const [students, setStudents] = useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setStudents(data));

    }, []);

    return (

        <div className="page">

            <button className="back" onClick={goHome}>
                ← Back
            </button>

            <h1>🎓 Student List</h1>

            <div className="data-grid">

                {students.map(student => (

                    <div className="data-card" key={student.id}>

                        <div className="student-icon">
                            👨‍🎓
                        </div>

                        <h2>{student.name}</h2>

                        <p>📧 {student.email}</p>

                        <p>🏙️ {student.address.city}</p>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Students;