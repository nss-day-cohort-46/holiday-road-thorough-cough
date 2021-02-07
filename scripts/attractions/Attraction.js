
export const Attraction = (attractionObj) => {
    return `
    <h3 class="oneAttractionHeader">${attractionObj.businessName}</h3>
        ${attractionObj.amenities.filter(a => {
            if (a.wheelchairAccessible === true) {
                return `<p class="oneAttractionDesc">${attractionObj.description}</p>`
            } else {
                return `<p>THIS ATTACTION IS NOT ADA ACCESSIBLE</p>`
            }
        })}
    `
}