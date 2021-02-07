
export const Park = (parkObj) => {
    return `
        <h2 class="onePark">${parkObj.name}  <button id="park-deets">more details</button></h2>
        <p class="oneParkDesc">${parkObj.description}</p>
        <h5 class="oneParkHours">Operating Hours</h5>
        <ul class="oneParkHours">
        ${parkObj.operatingHours.map(hours => `
            <li>Monday: ${hours.standardHours.monday}</li>
            <li>Tuesday: ${hours.standardHours.tuesday}</li>
            <li>Wednesday: ${hours.standardHours.wednesday}</li>
            <li>Thursday: ${hours.standardHours.thursday}</li>
            <li>Friday: ${hours.standardHours.friday}</li>
            <li>Saturday: ${hours.standardHours.saturday}</li>
            <li>Sunday: ${hours.standardHours.sunday}</li>
        `).join("")}
        </ul>
        <h5 class="oneParkActivities">Activities</h5>
        <ul class="oneParkDeets">
            ${parkObj.activities.map(activity => {
                return `<li>${activity.name}</li>`
        }).join("")}
        </ul>
    `
}