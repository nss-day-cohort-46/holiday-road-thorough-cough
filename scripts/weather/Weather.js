
export const FiveDayForecast = (dailyWeatherArray) => {
    return dailyWeatherArray.map(day => {
        let date = new Date(
            day.dt * 1000
        ).toLocaleDateString()
        return `
        <div class=weatherCard>
        <p class="weatherForecast">${date}</p>
        <p class="weatherLow">Low: ${Math.round(day.temp.min)}˚</p>
        <p class="weatherHigh">High: ${Math.round(day.temp.max)}˚</p>
        <p class="weatherHigh">Feels Like: ${Math.round(day.feels_like.day)}˚</p>
        </div>
        `
    }).join('')
}
