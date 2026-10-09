function Profile({ setPage }) {
  return (
    <div className="page">
      <button className="back" onClick={() => setPage("home")}>
        ← Back
      </button>

      <div className="profile">
        <div className="avatar large">U</div>

        <h1>Team Developer</h1>
        <p>React Frontend Development Team</p>

        <button>Contact Team</button>
      </div>
    </div>
  );
}

export default Profile;