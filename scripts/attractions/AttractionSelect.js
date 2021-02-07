import { getAttractions, useAttractions } from "./AttractionProvider.js"

const eventHub = document.querySelector(".mainContainer")
const attractionDropdown = document.querySelector(".attractionsDropdown")

eventHub.addEventListener("parkSelected", event => {
    const [prefix, parkState] = event.detail.parkSelected.split("--")
    getAttractions().then(() => {
        const attractionsCollection = useAttractions()
        const attractions = attractionsCollection.filter(attraction => attraction.state === parkState)
        attractionDropdown.innerHTML = AttractionsDropdown(attractions)
    })
})

const AttractionsDropdown = (collectionOfAttractions) => {
    return `<select name="select" id="attraction--dropdown" required>
        <option value="0">Select an Attraction...</option>
        ${collectionOfAttractions.map(attractions => {
        return `<option value="${attractions.id}">${attractions.name}</option>`
    }).join("")
        }
    </select>`
}

eventHub.addEventListener("change", event => {
    if (event.target.id.startsWith("attraction--")) {
        const attractionChosen = new CustomEvent("AttractionSelected", {
            detail: {
                attractionChosen: event.target.value
            }
        })
        eventHub.dispatchEvent(attractionChosen)
    }
    console.log(event)
})
