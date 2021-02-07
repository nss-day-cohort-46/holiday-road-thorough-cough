import { getParks, useParks } from '../parks/ParkProvider.js'
import { getWeather, useWeather } from './WeatherProvider.js'
import { FiveDayForecast } from './Weather.js'

const eventHub = document.querySelector('.mainContainer')
const weatherDiv = document.querySelector('.weatherPreview')

eventHub.addEventListener("parkSelected", event => {
    const [ id, state ] = event.detail.parkSelected.split('--')
    getParks().then(() => {
        const parks = useParks()
        const park = parks.find(park => park.id === id)
        getWeather(+park.latitude, +park.longitude).then(() => {
            const weather = useWeather()
            weatherDiv.innerHTML += FiveDayForecast(weather)
        })
    })
})