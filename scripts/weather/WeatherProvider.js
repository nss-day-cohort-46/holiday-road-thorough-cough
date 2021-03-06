import { api_key } from '../Settings.js'

let weather = []

export const useWeather = () => [ ...weather ]

export const getWeather = (lat, lon) => {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=${api_key.weatherKey}`)
        .then(r => r.json())
        .then(parsedWeather => {
            console.log(parsedWeather.daily)
            return weather = parsedWeather.daily.slice(0, 5)
            })
}
