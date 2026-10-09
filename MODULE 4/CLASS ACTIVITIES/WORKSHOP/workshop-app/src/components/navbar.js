function Navbar({ showPage }) {

    return (

        <nav className="navbar">

            <h2>⚛️ React Components</h2>

            <button onClick={() => showPage("home")}>
                Home
            </button>

        </nav>
    );
}

export default Navbar;