import { getAttractions, useAttractions } from "./AttractionProvider.js";
import { Attraction } from "./Attraction.js"

const eventHub = document.querySelector(".mainContainer")
const attractionContainer = document.querySelector(".attractionPreview")

export const AttractionPreview = () => {
    eventHub.addEventListener("AttractionSelected", event => {
        getAttractions().then(() => {
            const attractions = useAttractions()
            const oneAttraction = attractions.find(attraction => attraction.id === +event.detail.attractionChosen)
            attractionContainer.innerHTML = Attraction(oneAttraction)
        })
    })
}
