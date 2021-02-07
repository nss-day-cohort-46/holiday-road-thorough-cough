import { getEateries, useEateries } from "./EateryProvider.js"

const eventHub = document.querySelector(".mainContainer")
const attractionDropdown = document.querySelector(".eateriesDropdown")

eventHub.addEventListener("parkSelected", event => {
    const [prefix, parkState] = event.detail.parkSelected.split("--")
    getEateries().then(() => {
        const eateriesCollection = useEateries()
        const attractions = eateriesCollection.filter(eatery => eatery.state === parkState)
        attractionDropdown.innerHTML = EateriesDropdown(attractions)
    })
})

export const EateriesDropdown = (collectionOfEateries) => {
    return `<select name="select" id="eatery--dropdown" required>
        <option value="0">Select an Eatery...</option>
        ${collectionOfEateries.map(eateries => {
        return `<option value="${eateries.id}">${eateries.businessName}</option>`
    }).join("")
        }
    </select>`
}

eventHub.addEventListener("change", event => {
    if (event.target.id === "eatery--dropdown") {
        const eatery = new CustomEvent("eaterySelected")
        eventHub.dispatchEvent(eatery)
    }
})