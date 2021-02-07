import { getEateries, useEateries } from "./EateryProvider.js";
import { Eatery } from "./Eatery.js"

const eventHub = document.querySelector(".mainContainer")
const eateryContainer = document.querySelector(".eateryPreview")

export const EateryPreview = () => {
    eventHub.addEventListener("EaterySelected", event => {
        getEateries().then(() => {
            const eateries = useEateries()
            const oneEatery = eateries.find(eatery => eatery.id === event.detail.eateryChosen)
            eateryContainer.innerHTML = Eatery(oneEatery)
        })
    })
}