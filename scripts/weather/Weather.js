
export const FiveDayForecast = (dailyWeatherArray) => {
    return dailyWeatherArray.map(day => {
        let date = new Date(
            day.dt * 1000
        ).toLocaleDateString()
        return `
        <p class="weatherForecast">${date}</p>
        <p class="weatherLow">Low: ${day.temp.min}˚</p>
        <p class="weatherHigh">High: ${day.temp.max}˚</p>
        <p class="weatherHigh">Feels Like: ${day.feels_like.day}˚</p>
        
        `
    }).join('')

}
    // ${weatherObject.weather.map(w => `<img class="weatherimg"${w.icon}')}/>
