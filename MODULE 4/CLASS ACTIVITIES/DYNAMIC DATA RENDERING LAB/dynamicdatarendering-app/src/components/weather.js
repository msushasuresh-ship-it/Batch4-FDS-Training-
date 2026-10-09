import { useEffect, useState } from "react";

function Weather({ goHome }) {

    const [weather, setWeather] = useState(null);

    useEffect(() => {

        fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=13.08&longitude=80.27&current=temperature_2m,relative_humidity_2m,wind_speed_10m"
        )
            .then(response => response.json())
            .then(data => setWeather(data.current));

    }, []);

    return (

        <div className="page">

            <button className="back" onClick={goHome}>
                ← Back
            </button>

            <h1>🌤️ Weather Information</h1>

            {weather && (

                <div className="weather">

                    <div>
                        🌡️
                        <h2>
                            {weather.temperature_2m}°C
                        </h2>
                        <p>Temperature</p>
                    </div>

                    <div>
                        💧
                        <h2>
                            {weather.relative_humidity_2m}%
                        </h2>
                        <p>Humidity</p>
                    </div>

                    <div>
                        💨
                        <h2>
                            {weather.wind_speed_10m} km/h
                        </h2>
                        <p>Wind Speed</p>
                    </div>

                </div>

            )}

        </div>
    );
}

export default Weather;