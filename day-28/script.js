

let btn = document.getElementById("btn");
let result = document.getElementById("result");
let cityInput = document.getElementById("city");

btn.addEventListener("click", getWeather);

cityInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        getWeather();
    }
});

async function getWeather() {

    let city = cityInput.value.trim();

    if (!city) {
        result.innerHTML = "⚠ Please enter city name";
        return;
    }

    result.innerHTML = "⏳ Loading...";

    try {

        let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        let data = await response.json();

        let temp = data.main.temp;
        let weather = data.weather[0].main;
        let icon = data.weather[0].icon;

        let iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        result.innerHTML = `
      <h2>${data.name}</h2>
      <img src="${iconUrl}" alt="weather icon">
      <p>🌡 Temperature: ${temp}°C</p>
      <p>☁ Weather: ${weather}</p>
    `;

    } catch (error) {
        result.innerHTML = "❌ " + error.message;
    }
}

