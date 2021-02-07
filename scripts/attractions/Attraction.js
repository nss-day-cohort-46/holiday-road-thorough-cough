
export const Attraction = (attractionObj) => {
    return `
    <h5 class="attractionsHeader">Attractions</h5>
    <h3 class="oneEateryHeader">${attractionObj.name}  <button id="attraction-deets">more details</button></h3>
    <p class="oneEateryDesc">${attractionObj.description}</p>`
}
    