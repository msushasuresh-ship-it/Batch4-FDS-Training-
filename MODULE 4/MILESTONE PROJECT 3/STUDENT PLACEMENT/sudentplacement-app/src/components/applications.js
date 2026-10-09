function Applications({ setPage }) {

  const applications = [
    {
      company: "TCS",
      role: "Software Developer",
      status: "Under Review"
    },
    {
      company: "Infosys",
      role: "Frontend Developer",
      status: "Shortlisted"
    },
    {
      company: "Zoho",
      role: "React Developer",
      status: "Selected"
    }
  ];

  return (
    <div className="page">

      <button
        className="back"
        onClick={() => setPage("home")}
      >
        ← Back
      </button>

      <h1>Application Tracking</h1>

      <div className="card-container">

        {applications.map((app, index) => (

          <div className="job-card" key={index}>

            <h2>{app.company}</h2>

            <p>{app.role}</p>

            <span className="status">
              {app.status}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Applications;