import { useState } from "react";

import Students from "./components/students";
import Products from "./components/product";
import News from "./components/news";
import Weather from "./components/weather";

import "./App.css";

function App() {

    const [page, setPage] = useState("home");

    return (

        <div>

            <header>

                <h1>📊 Dynamic Data Lab</h1>

                <p>React API Data Rendering</p>

            </header>


            {page === "home" && (

                <div className="home">

                    <h2>Select Data</h2>

                    <div className="menu">

                        <button onClick={() => setPage("students")}>
                            🎓 Student List
                        </button>

                        <button onClick={() => setPage("products")}>
                            🛍️ Product Catalog
                        </button>

                        <button onClick={() => setPage("news")}>
                            📰 News Feed
                        </button>

                        <button onClick={() => setPage("weather")}>
                            🌤️ Weather Information
                        </button>

                    </div>

                </div>

            )}


            {page === "students" && (
                <Students goHome={() => setPage("home")} />
            )}

            {page === "products" && (
                <Products goHome={() => setPage("home")} />
            )}

            {page === "news" && (
                <News goHome={() => setPage("home")} />
            )}

            {page === "weather" && (
                <Weather goHome={() => setPage("home")} />
            )}

        </div>
    );
}

export default App;