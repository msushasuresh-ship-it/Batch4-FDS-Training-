function Stats({ setPage }) {
  return (
    <div className="page">
      <button className="back" onClick={() => setPage("home")}>
        ← Back
      </button>

      <h1>Project Statistics</h1>

      <div className="stats">
        <div>
          <h2>25</h2>
          <p>Tasks Completed</p>
        </div>

        <div>
          <h2>10</h2>
          <p>Tasks Pending</p>
        </div>

        <div>
          <h2>8</h2>
          <p>Team Members</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;