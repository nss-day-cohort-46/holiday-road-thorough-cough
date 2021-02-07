import { api_key } from '../Settings.js'

let attractions = []

export const useAttractions = () => [ ...attractions ]

export const getAttractions = () => {
    return fetch(`http://holidayroad.nss.team/bizarreries`)
        .then(r => r.json())
        .then(parsedR => attractions = parsedR)
        .then(() => console.log(attractions))
}