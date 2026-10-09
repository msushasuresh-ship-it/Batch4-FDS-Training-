import { useState } from "react";

function Jobs({ setPage }) {

  const [search, setSearch] = useState("");

  const jobs = [
    {
      company: "TCS",
      role: "Software Developer",
      location: "Chennai",
      package: "6 LPA"
    },
    {
      company: "Infosys",
      role: "Frontend Developer",
      location: "Bangalore",
      package: "7 LPA"
    },
    {
      company: "Zoho",
      role: "React Developer",
      location: "Chennai",
      package: "8 LPA"
    },
    {
      company: "Accenture",
      role: "Data Analyst",
      location: "Pune",
      package: "6.5 LPA"
    }
  ];

  const filteredJobs = jobs.filter((job) =>
    job.company.toLowerCase().includes(search.toLowerCase()) ||
    job.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">

      <button
        className="back"
        onClick={() => setPage("home")}
      >
        ← Back
      </button>

      <h1>Placement Opportunities</h1>

      <input
        className="search"
        type="text"
        placeholder="Search company or job..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="card-container">

        {filteredJobs.map((job, index) => (

          <div className="job-card" key={index}>

            <h2>{job.company}</h2>

            <h3>{job.role}</h3>

            <p>📍 {job.location}</p>

            <p>💰 {job.package}</p>

            <button
              onClick={() =>
                alert("Application submitted successfully!")
              }
            >
              Apply Now
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Jobs;