import { getParks, useParks } from "./ParkProvider.js"

const parkDropdown = document.querySelector(".newItineraryContainer")


export const selectPark = () => {
    getParks().then(() => {
        const parkOptions = useParks()
        return parkDropdown.innerHTML += dropdownMenu(parkOptions)
    })
}

const dropdownMenu = (collectionOfParks) => {
    return `<select name="select" required>
        <option value="0" for="select...">Select a Park...</option>
        ${
            collectionOfParks.map(park => {
                return `<option value=${park.id}>${park.name}</option>`
            })
        }
    </select>`
}