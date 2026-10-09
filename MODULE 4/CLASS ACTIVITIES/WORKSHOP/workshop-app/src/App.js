import { useState } from "react";

import Navbar from "./components/navbar";
import Dashboard from "./components/dashboard";
import Card from "./components/card";
import Form from "./components/form";
import Modal from "./components/modal";

import "./App.css";

function App() {

    const [page, setPage] = useState("home");

    function showPage(selectedPage) {
        setPage(selectedPage);
    }

    return (
        <div>

            <Navbar showPage={showPage} />

            {page === "home" && (

                <div className="home">

                    <h1>Component Creation Workshop</h1>

                    <p>
                        Explore reusable React components
                    </p>

                    <div className="menu">

                        <button onClick={() => showPage("dashboard")}>
                            📊 Dashboard Widgets
                        </button>

                        <button onClick={() => showPage("cards")}>
                            🃏 Cards
                        </button>

                        <button onClick={() => showPage("form")}>
                            📝 Form
                        </button>

                        <button onClick={() => showPage("modal")}>
                            💬 Modal Window
                        </button>

                    </div>

                </div>
            )}

            {page === "dashboard" && (
                <Dashboard showPage={showPage} />
            )}

            {page === "card" && (
                <Card showPage={showPage} />
            )}

            {page === "form" && (
                <Form showPage={showPage} />
            )}

            {page === "modal" && (
                <Modal showPage={showPage} />
            )}

        </div>
    );
}

export default App;