function Modal({ showPage }) {

    return (

        <div className="page">

            <button
                className="back"
                onClick={() => showPage("home")}
            >
                ← Back
            </button>

            <h1>💬 Modal Window</h1>

            <div className="modal-box">

                <h2>Welcome!</h2>

                <p>
                    This is a reusable React Modal Window.
                </p>

                <button>
                    Continue
                </button>

            </div>

        </div>
    );
}

export default Modal;