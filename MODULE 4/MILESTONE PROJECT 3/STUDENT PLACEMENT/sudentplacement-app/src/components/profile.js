function Profile({ setPage }) {

  return (
    <div className="page">

      <button
        className="back"
        onClick={() => setPage("home")}
      >
        ← Back
      </button>

      <div className="profile-box">

        <div className="avatar">
          U
        </div>

        <h1>Usha M S</h1>

        <p>AIML Student</p>

        <p>Prathyusha Engineering College</p>

        <p>Email: usha@example.com</p>

        <button>
          Edit Profile
        </button>

      </div>

    </div>
  );
}

export default Profile;