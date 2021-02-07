
export const Park = (parkObj) => {
    return `
        <h2 class="onePark">${parkObj.name}</h2>
        <p class="oneParkDesc">Description: ${parkObj.description}</p>
        <h5 class="oneParkActivities">Activities</h5>
        <ul class="oneParkDeets">
            ${parkObj.activities.map(activity => {
                return `<li>${activity.name}</li>`
        }).join("")}
        </ul>
    `
}