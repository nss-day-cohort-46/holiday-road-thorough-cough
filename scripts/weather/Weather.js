
export const FiveDayForecast = (dailyWeatherArray) => {

    return dailyWeatherArray.map(day => {
        let date = new Date(
            day.dt * 1000
        ).toLocaleDateString("en-US")
        let icon = "";
        const weather = day.weather[0].icon;
        if (weather === "01d") {
            icon = "🌞";
        }
        if (weather === "02d" || weather === "03d") {
            icon = "⛅️";
        }
        if (weather === "04d") {
            icon = "☁️";
        }
        if (weather === "09d" || weather === "10d") {
            icon = "🌧";
        }
        if (weather === "11d") {
            icon = "⛈";
        }
        if (weather === "13d") {
            icon = "❄️";
        }
        return `<div class="weatherCard">
        <p class="weatherForecast">${date}</p>
        <div class="weather-icon">${icon}</div>
        <p class="weatherDesc">${day.weather[0].description}</p>
        <p class="weatherLow">Low: ${Math.round(day.temp.min)}˚</p>
        <p class="weatherHigh">High: ${Math.round(day.temp.max)}˚</p>
        <p class="weatherHigh">Feels Like: ${Math.round(day.feels_like.day)}˚</p>
        </div>
        `
    }).join('')
}

