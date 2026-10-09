function Navbar({ setPage }) {
  return (
    <nav className="navbar">
      <h2>Team Dashboard</h2>

      <button onClick={() => setPage("home")}>
        Home
      </button>
    </nav>
  );
}

export default Navbar;