function Dashboard({ showPage }) {

    return (

        <div className="page">

            <button
                className="back"
                onClick={() => showPage("home")}
            >
                ← Back
            </button>

            <h1>📊 Dashboard Widgets</h1>

            <div className="cards">

                <div className="widget">
                    <h3>👥 Users</h3>
                    <h2>1,250</h2>
                    <p>Active Users</p>
                </div>

                <div className="widget">
                    <h3>📦 Orders</h3>
                    <h2>540</h2>
                    <p>Total Orders</p>
                </div>

                <div className="widget">
                    <h3>💰 Revenue</h3>
                    <h2>₹85,000</h2>
                    <p>This Month</p>
                </div>

            </div>

        </div>
    );
}

export default Dashboard;