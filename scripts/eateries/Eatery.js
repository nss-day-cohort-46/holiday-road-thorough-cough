export const Eatery = (eateryObj) => {
    if (eateryObj.hasOwnProperty('ameneties') && eateryObj.ameneties.wheelchairAccessible === true) {
        return `
            <h5 class="eateriesHeader">Eateries</h5>
            <h3 class="oneEateryHeader">${eateryObj.businessName} <button id="eatery-deets">more details</button></h3>
                <p class="oneEateryDesc">${eateryObj.description}</p>
            `
        } else {
            return `
            <h5 class="eateriesHeader">Eateries</h5>
                <p>${eateryObj.businessName} IS NOT ADA ACCESSIBLE</p>
            `
        }
    }