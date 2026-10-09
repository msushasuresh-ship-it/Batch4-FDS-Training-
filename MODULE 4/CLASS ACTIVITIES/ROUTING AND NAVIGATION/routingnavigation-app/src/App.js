import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from "react";

import Home from "./components/home";
import About from "./components/about";
import Users from "./components/users";
import UserDetails from "./components/userdetails";
import Dashboard from "./components/dashboard";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>

      <nav className="navbar">

        <h2>React Navigation</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>

          {isLoggedIn && (
            <Link to="/dashboard">Dashboard</Link>
          )}

          <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>

      </nav>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/users" element={<Users />} />

        {/* Dynamic Route */}
        <Route
          path="/users/:id"
          element={<UserDetails />}
        />

        {/* Protected Route */}
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <Dashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;