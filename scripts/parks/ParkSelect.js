import { getParks, useParks } from "./ParkProvider.js"

const parkDropdown = document.querySelector(".parksDropdown")
const eventHub = document.querySelector(".mainContainer")

export const selectPark = () => {
    getParks().then(() => {
        const parkOptions = useParks()
        return parkDropdown.innerHTML += dropdownMenu(parkOptions)
    })
}

const dropdownMenu = (collectionOfParks) => {
    return `<select name="select" id="parks--dropdown" required>
        <option value="0">Select a Park...</option>
        ${collectionOfParks.map(park => {
        return `<option value="${park.id}--${park.states}">${park.name}</option>`
    }).join("")
        }
    </select>`
}

eventHub.addEventListener("change", event => {
    if (event.target.id === "parks--dropdown") {
        const parkSelect = new CustomEvent("parkSelected", {
            detail: {
                parkSelected: event.target.value
            }
        })
        eventHub.dispatchEvent(parkSelect)
    }
})