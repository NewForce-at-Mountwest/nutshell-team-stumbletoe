// this module clears the dashboard upon logout
// built by Sydney Wait

import friendActivator from "../friends/friendActivator";
import eventDeactivator from "../Events/EventDeactivator";
import manageContent from "../Tasks/tasksContentManager";

const dashboardDeactivator = () => {

    document.querySelector("#frnds-cont").innerHTML = ""
    // insert your functions or HTML strings that need to be cleared on logout
    eventDeactivator(); //clears events container

    manageContent.clearContent(); //clears the tasks container

}

export default dashboardDeactivator;