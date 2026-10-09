function Cards({ showPage }) {

    return (

        <div className="page">

            <button
                className="back"
                onClick={() => showPage("home")}
            >
                ← Back
            </button>

            <h1>🃏 Reusable Cards</h1>

            <div className="cards">

                <div className="card">
                    <div className="icon">💻</div>

                    <h2>Web Development</h2>

                    <p>
                        Learn HTML, CSS, JavaScript and React.
                    </p>

                    <button>View Details</button>
                </div>

                <div className="card">
                    <div className="icon">🤖</div>

                    <h2>Artificial Intelligence</h2>

                    <p>
                        Explore AI and Machine Learning.
                    </p>

                    <button>View Details</button>
                </div>

                <div className="card">
                    <div className="icon">🎨</div>

                    <h2>UI/UX Design</h2>

                    <p>
                        Create attractive user interfaces.
                    </p>

                    <button>View Details</button>
                </div>

            </div>

        </div>
    );
}

export default Cards;