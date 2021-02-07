import { getParks, useParks } from "./ParkProvider.js"
import { Park } from "./Park.js"


const eventHub = document.querySelector(".mainContainer")
const previewContainer = document.querySelector(".parkPreview")

export const ParkPreview = () => {

    eventHub.addEventListener("parkSelected", event => {
        const [id, state] = event.detail.parkSelected.split("--")
        getParks().then(() => {
            const parks = useParks()
            const selectedPark = parks.find(chosenPark => chosenPark.id === id)
            previewContainer.innerHTML = Park(selectedPark)
        })
    })
}