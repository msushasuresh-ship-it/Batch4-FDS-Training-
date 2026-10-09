import { useState } from "react";

function Form({ showPage }) {

    const [message, setMessage] = useState("");

    function submitForm(event) {

        event.preventDefault();

        setMessage("Registration Successful! ✅");
    }

    return (

        <div className="page">

            <button
                className="back"
                onClick={() => showPage("home")}
            >
                ← Back
            </button>

            <h1>📝 Registration Form</h1>

            <form onSubmit={submitForm}>

                <input
                    type="text"
                    placeholder="Enter your name"
                    required
                />

                <input
                    type="email"
                    placeholder="Enter your email"
                    required
                />

                <select required>

                    <option value="">
                        Select Course
                    </option>

                    <option>
                        Web Development
                    </option>

                    <option>
                        AI & ML
                    </option>

                    <option>
                        UI/UX Design
                    </option>

                </select>

                <button type="submit">
                    Register
                </button>

                <p className="success">
                    {message}
                </p>

            </form>

        </div>
    );
}

export default Form;