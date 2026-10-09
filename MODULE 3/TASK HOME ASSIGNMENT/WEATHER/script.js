async function getWeather() {

    const city =
        document.getElementById("city").value.trim();

    const error =
        document.getElementById("error");


    // Check empty input
    if (city === "") {

        error.innerText =
            "Please enter a city name.";

        return;
    }


    error.innerText = "Loading...";


    try {

        // Find city coordinates
        const locationResponse =
            await fetch(
                `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
            );


        const locationData =
            await locationResponse.json();


        // Invalid city
        if (!locationData.results) {

            error.innerText =
                "City not found. Please enter a valid city.";

            return;
        }


        const location =
            locationData.results[0];


        // Get weather
        const weatherResponse =
            await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
            );


        const weatherData =
            await weatherResponse.json();


        const current =
            weatherData.current;


        // Display data
        document.getElementById("cityName").innerText =
            location.name;


        document.getElementById("temperature").innerText =
            current.temperature_2m + " °C";


        document.getElementById("wind").innerText =
            current.wind_speed_10m + " km/h";


        document.getElementById("humidity").innerText =
            current.relative_humidity_2m + "%";


        document.getElementById("time").innerText =
            current.time.substring(11, 16);


        document.getElementById("condition").innerText =
            getCondition(current.weather_code);


        document.getElementById("icon").innerText =
            getIcon(current.weather_code);


        error.innerText = "";

    }

    catch (error) {

        document.getElementById("error").innerText =
            "Unable to get weather data. Please try again.";

    }
}


/* Weather Condition */

function getCondition(code) {

    if (code === 0)
        return "Clear Sky";

    if (code <= 3)
        return "Partly Cloudy";

    if (code <= 48)
        return "Cloudy";

    if (code <= 67)
        return "Rainy";

    if (code <= 77)
        return "Snowy";

    if (code <= 82)
        return "Rain Showers";

    if (code >= 95)
        return "Thunderstorm";

    return "Unknown";
}


/* Weather Icon */

function getIcon(code) {

    if (code === 0)
        return "☀️";

    if (code <= 3)
        return "⛅";

    if (code <= 48)
        return "☁️";

    if (code <= 67)
        return "🌧️";

    if (code <= 77)
        return "❄️";

    if (code <= 82)
        return "🌦️";

    if (code >= 95)
        return "⛈️";

    return "🌍";
}