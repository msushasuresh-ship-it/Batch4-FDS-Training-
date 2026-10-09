import { useState } from "react";

function Login({ setPage, setLoggedIn }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {

    event.preventDefault();

    if (email && password) {
      setLoggedIn(true);
      setPage("home");
    } else {
      alert("Please enter email and password");
    }

  };

  return (
    <div className="page">

      <div className="form-box">

        <h1>Student Login</h1>

        <form onSubmit={login}>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p>
          New student?
          <button
            className="link-button"
            onClick={() => setPage("register")}
          >
            Register
          </button>
        </p>

      </div>

    </div>
  );
}

export default Login;