function UserCard({ setPage }) {
  const users = [
    {
      name: "Usha",
      role: "Frontend Developer"
    },
    {
      name: "Revathi",
      role: "UI Designer"
    },
    {
      name: "Yashika",
      role: "React Developer"
    }
  ];

  return (
    <div className="page">
      <button className="back" onClick={() => setPage("home")}>
        ← Back
      </button>

      <h1>Team Members</h1>

      <div className="card-container">
        {users.map((user, index) => (
          <div className="user-card" key={index}>
            <div className="avatar">
              {user.name.charAt(0)}
            </div>

            <h2>{user.name}</h2>
            <p>{user.role}</p>

            <button>View Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserCard;