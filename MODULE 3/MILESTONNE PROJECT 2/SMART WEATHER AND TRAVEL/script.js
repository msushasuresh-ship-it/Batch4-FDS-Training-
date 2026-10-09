async function getWeather() {

    const city = document.getElementById("cityInput").value.trim();
    const error = document.getElementById("error");

    error.innerText = "";

    if (city === "") {
        error.innerText = "Please enter a city name.";
        return;
    }

    try {

        // Get city coordinates
        const geoResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
        );

        const geoData = await geoResponse.json();

        if (!geoData.results || geoData.results.length === 0) {
            error.innerText = "City not found. Please enter a valid city.";
            return;
        }

        const location = geoData.results[0];

        const latitude = location.latitude;
        const longitude = location.longitude;

        // Get weather
        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`
        );

        const weatherData = await weatherResponse.json();

        // Current weather
        const current = weatherData.current;

        document.getElementById("cityName").innerText =
            location.name + ", " + location.country;

        document.getElementById("temperature").innerText =
            Math.round(current.temperature_2m) + "°C";

        document.getElementById("humidity").innerText =
            current.relative_humidity_2m + "%";

        document.getElementById("wind").innerText =
            Math.round(current.wind_speed_10m) + " km/h";

        const weatherInfo = getWeatherInfo(current.weather_code);

        document.getElementById("weatherIcon").innerText =
            weatherInfo.icon;

        document.getElementById("condition").innerText =
            weatherInfo.condition;

        // Travel suggestion
        document.getElementById("suggestion").innerText =
            getTravelSuggestion(current.weather_code);

        // Forecast
        displayForecast(weatherData.daily);

    } catch (error) {

        document.getElementById("error").innerText =
            "Unable to fetch weather data. Please try again.";

        console.log(error);
    }
}


// Weather information

function getWeatherInfo(code) {

    if (code === 0) {
        return {
            icon: "☀️",
            condition: "Clear Sky"
        };
    }

    if (code >= 1 && code <= 3) {
        return {
            icon: "⛅",
            condition: "Partly Cloudy"
        };
    }

    if (code >= 45 && code <= 48) {
        return {
            icon: "🌫️",
            condition: "Foggy"
        };
    }

    if (code >= 51 && code <= 67) {
        return {
            icon: "🌧️",
            condition: "Rainy"
        };
    }

    if (code >= 71 && code <= 77) {
        return {
            icon: "❄️",
            condition: "Snowy"
        };
    }

    if (code >= 80 && code <= 82) {
        return {
            icon: "🌦️",
            condition: "Rain Showers"
        };
    }

    if (code >= 95) {
        return {
            icon: "⛈️",
            condition: "Thunderstorm"
        };
    }

    return {
        icon: "🌤️",
        condition: "Unknown"
    };
}


// Travel suggestions

function getTravelSuggestion(code) {

    if (code === 0) {
        return "☀️ Excellent weather! Perfect for sightseeing, beaches and outdoor activities.";
    }

    if (code >= 1 && code <= 3) {
        return "⛅ Good weather for travelling. You can enjoy sightseeing and outdoor activities.";
    }

    if (code >= 45 && code <= 48) {
        return "🌫️ Visibility may be low. Prefer indoor attractions and travel carefully.";
    }

    if (code >= 51 && code <= 67) {
        return "🌧️ Carry an umbrella and raincoat. Indoor attractions are recommended.";
    }

    if (code >= 71 && code <= 77) {
        return "❄️ Cold conditions expected. Carry warm clothes and plan indoor activities.";
    }

    if (code >= 80 && code <= 82) {
        return "🌦️ Rain showers are expected. Carry an umbrella and plan flexible activities.";
    }

    if (code >= 95) {
        return "⛈️ Thunderstorms expected. Avoid outdoor travel and stay indoors if possible.";
    }

    return "🌤️ Check local conditions before planning your trip.";
}


// Display 5-day forecast

function displayForecast(daily) {

    const forecast = document.getElementById("forecast");

    forecast.innerHTML = "";

    for (let i = 0; i < 5; i++) {

        const date = new Date(daily.time[i]);

        const day = date.toLocaleDateString("en-US", {
            weekday: "short"
        });

        const info = getWeatherInfo(daily.weather_code[i]);

        const card = document.createElement("div");

        card.className = "forecast-card";

        card.innerHTML = `
            <h3>${day}</h3>

            <div class="icon">${info.icon}</div>

            <p>${info.condition}</p>

            <p>🌡️ ${Math.round(daily.temperature_2m_max[i])}°C</p>

            <p>❄️ ${Math.round(daily.temperature_2m_min[i])}°C</p>
        `;

        forecast.appendChild(card);
    }
}


// Press Enter to search

document.getElementById("cityInput").addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        getWeather();
    }

});