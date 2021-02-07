export const Eatery = (eateryObj) => {
    if (eateryObj.hasOwnProperty('ameneties') && eateryObj.ameneties.wheelchairAccessible === true) {
    return `<h3 class="oneEateryHeader">${eateryObj.businessName}</h3>
            <p class="oneEateryDesc">${eateryObj.description}</p>`
        } else {
            return `<p>${eateryObj.businessName} IS NOT ADA ACCESSIBLE</p>`
        }
    }