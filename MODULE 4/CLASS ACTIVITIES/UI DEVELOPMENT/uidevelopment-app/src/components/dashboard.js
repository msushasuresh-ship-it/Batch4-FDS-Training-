function Dashboard({ setPage }) {
  return (
    <div className="page">
      <button className="back" onClick={() => setPage("home")}>
        ← Back
      </button>

      <h1>Dashboard</h1>

      <div className="card-container">
        <div className="card">
          <h2>125</h2>
          <p>Total Users</p>
        </div>

        <div className="card">
          <h2>48</h2>
          <p>Projects</p>
        </div>

        <div className="card">
          <h2>92%</h2>
          <p>Performance</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;