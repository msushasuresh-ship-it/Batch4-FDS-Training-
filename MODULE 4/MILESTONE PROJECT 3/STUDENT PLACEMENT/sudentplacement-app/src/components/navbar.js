function Navbar({ setPage, loggedIn, setLoggedIn }) {

  const logout = () => {
    setLoggedIn(false);
    setPage("home");
  };

  return (
    <nav className="navbar">

      <h2>Placement Portal</h2>

      <div className="nav-links">

        <button onClick={() => setPage("home")}>
          Home
        </button>

        {loggedIn && (
          <>
            <button onClick={() => setPage("jobs")}>
              Jobs
            </button>

            <button onClick={() => setPage("applications")}>
              Applications
            </button>

            <button onClick={() => setPage("notifications")}>
              Notifications
            </button>

            <button onClick={logout}>
              Logout
            </button>
          </>
        )}

      </div>

    </nav>
  );
}

export default Navbar;