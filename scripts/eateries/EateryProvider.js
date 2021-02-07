
let eateries = []

export const useEateries = () => [ ...eateries ]

export const getEateries = () => {
    return fetch(`http://holidayroad.nss.team/eateries`)
        .then(r => r.json())
        .then(parsedR => eateries = parsedR)
}