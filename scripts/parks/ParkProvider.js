import { api_key } from '../Settings.js'

let parks = []

export const useParks = () => [ ...parks ]

export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?&api_key=${api_key.npsKey}&limit=1000`)
        .then(r => r.json())
        .then(parsedR => parks = parsedR.data)
}

