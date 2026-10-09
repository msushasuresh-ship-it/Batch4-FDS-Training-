function Dashboard() {
  return (
    <div className="page">

      <h1>Protected Dashboard</h1>

      <div className="card-container">

        <div className="card">
          <h2>120</h2>
          <p>Total Users</p>
        </div>

        <div className="card">
          <h2>45</h2>
          <p>Projects</p>
        </div>

        <div className="card">
          <h2>95%</h2>
          <p>Performance</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;