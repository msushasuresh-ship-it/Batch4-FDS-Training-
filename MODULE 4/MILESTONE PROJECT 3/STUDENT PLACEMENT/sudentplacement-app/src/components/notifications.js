function Notifications({ setPage }) {

  const notifications = [
    "🔔 Infosys interview scheduled for 10 October",
    "📢 TCS placement registration is open",
    "🎯 Zoho shortlisted your application",
    "📅 New campus placement drive announced"
  ];

  return (
    <div className="page">

      <button
        className="back"
        onClick={() => setPage("home")}
      >
        ← Back
      </button>

      <h1>Notifications</h1>

      <div className="notification-box">

        {notifications.map((notification, index) => (

          <div className="notification" key={index}>
            {notification}
          </div>

        ))}

      </div>

    </div>
  );
}

export default Notifications;