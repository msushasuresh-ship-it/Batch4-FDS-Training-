import { useState } from "react";

import Navbar from "./components/navbar";
import Login from "./components/login";
import Register from "./components/register";
import Profile from "./components/profile";
import Jobs from "./components/jobs";
import Applications from "./components/applications";
import Interviews from "./components/interviews";
import Analytics from "./components/analytics";
import Notifications from "./components/notifications";

import "./App.css";

function App() {

  const [page, setPage] = useState("home");
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>

      <Navbar
        setPage={setPage}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />

      {/* HOME */}

      {page === "home" && (
        <div className="home">

          <h1>Student Placement Dashboard</h1>

          <p>
            Manage your placement journey in one place
          </p>

          {!loggedIn ? (

            <div className="menu">

              <button onClick={() => setPage("login")}>
                Student Login
              </button>

              <button onClick={() => setPage("register")}>
                Register
              </button>

            </div>

          ) : (

            <div className="dashboard-menu">

              <button onClick={() => setPage("jobs")}>
                💼 Job Openings
              </button>

              <button onClick={() => setPage("applications")}>
                📄 Applications
              </button>

              <button onClick={() => setPage("interviews")}>
                📅 Interviews
              </button>

              <button onClick={() => setPage("analytics")}>
                📊 Analytics
              </button>

              <button onClick={() => setPage("notifications")}>
                🔔 Notifications
              </button>

              <button onClick={() => setPage("profile")}>
                👤 Profile
              </button>

            </div>

          )}

        </div>
      )}

      {/* LOGIN */}

      {page === "login" && (
        <Login
          setPage={setPage}
          setLoggedIn={setLoggedIn}
        />
      )}

      {/* REGISTER */}

      {page === "register" && (
        <Register setPage={setPage} />
      )}

      {/* PROFILE */}

      {page === "profile" && (
        <Profile setPage={setPage} />
      )}

      {/* JOBS */}

      {page === "jobs" && (
        <Jobs setPage={setPage} />
      )}

      {/* APPLICATIONS */}

      {page === "applications" && (
        <Applications setPage={setPage} />
      )}

      {/* INTERVIEWS */}

      {page === "interviews" && (
        <Interviews setPage={setPage} />
      )}

      {/* ANALYTICS */}

      {page === "analytics" && (
        <Analytics setPage={setPage} />
      )}

      {/* NOTIFICATIONS */}

      {page === "notifications" && (
        <Notifications setPage={setPage} />
      )}

    </div>
  );
}

export default App;