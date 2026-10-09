function Analytics({ setPage }) {

  return (
    <div className="page">

      <button
        className="back"
        onClick={() => setPage("home")}
      >
        ← Back
      </button>

      <h1>Placement Analytics</h1>

      <div className="analytics-container">

        <div className="stat-card">
          <h2>24</h2>
          <p>Applications</p>
        </div>

        <div className="stat-card">
          <h2>8</h2>
          <p>Shortlisted</p>
        </div>

        <div className="stat-card">
          <h2>4</h2>
          <p>Interviews</p>
        </div>

        <div className="stat-card">
          <h2>2</h2>
          <p>Selected</p>
        </div>

      </div>

      <div className="chart-box">

        <h2>Placement Trend</h2>

        <div className="bars">

          <div style={{ height: "60%" }}>
            <span>Jan</span>
          </div>

          <div style={{ height: "80%" }}>
            <span>Feb</span>
          </div>

          <div style={{ height: "45%" }}>
            <span>Mar</span>
          </div>

          <div style={{ height: "90%" }}>
            <span>Apr</span>
          </div>

          <div style={{ height: "70%" }}>
            <span>May</span>
          </div>

        </div>

      </div>

      <div className="deadline">

        <h2>Upcoming Deadlines</h2>

        <p>TCS Application – 12 October</p>
        <p>Zoho Application – 15 October</p>

      </div>

    </div>
  );
}

export default Analytics;