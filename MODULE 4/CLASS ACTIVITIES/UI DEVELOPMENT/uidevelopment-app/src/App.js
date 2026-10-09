import { useState } from "react";
import Navbar from "./components/navbar";
import Dashboard from "./components/dashboard";
import UserCard from "./components/usercard";
import Stats from "./components/stats";
import Profile from "./components/profile";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <Navbar setPage={setPage} />

      {page === "home" && (
        <div className="home">
          <h1>Team UI Development Dashboard</h1>
          <p>Reusable React Components</p>

          <div className="menu">
            <button onClick={() => setPage("dashboard")}>
              Dashboard
            </button>

            <button onClick={() => setPage("users")}>
              User Cards
            </button>

            <button onClick={() => setPage("stats")}>
              Statistics
            </button>

            <button onClick={() => setPage("profile")}>
              Profile
            </button>
          </div>
        </div>
      )}

      {page === "dashboard" && <Dashboard setPage={setPage} />}
      {page === "users" && <UserCard setPage={setPage} />}
      {page === "stats" && <Stats setPage={setPage} />}
      {page === "profile" && <Profile setPage={setPage} />}
    </div>
  );
}

export default App;