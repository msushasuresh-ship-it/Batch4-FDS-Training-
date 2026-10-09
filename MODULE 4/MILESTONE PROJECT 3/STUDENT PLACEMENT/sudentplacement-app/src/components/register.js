import { useState } from "react";

function Register({ setPage }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const register = (event) => {

    event.preventDefault();

    if (name && email) {
      alert("Registration Successful!");
      setPage("login");
    } else {
      alert("Please fill all details");
    }

  };

  return (
    <div className="page">

      <div className="form-box">

        <h1>Student Registration</h1>

        <form onSubmit={register}>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Department"
          />

          <input
            type="text"
            placeholder="College"
          />

          <button type="submit">
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;