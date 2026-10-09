function Interviews({ setPage }) {

  const interviews = [
    {
      company: "Infosys",
      date: "10 October 2026",
      time: "10:00 AM"
    },
    {
      company: "Zoho",
      date: "14 October 2026",
      time: "2:00 PM"
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

      <h1>Interview Schedule</h1>

      <div className="card-container">

        {interviews.map((interview, index) => (

          <div className="job-card" key={index}>

            <h2>{interview.company}</h2>

            <p>📅 {interview.date}</p>

            <p>⏰ {interview.time}</p>

            <button>
              View Interview
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Interviews;