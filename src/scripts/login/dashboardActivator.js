//This function imports all the event listeners and page loads from the individual modules
//news, events, tasks, chats, and friends
// import formPrinter from "./printToDom.js"

import formPrinter from "./printToDom.js"
import tasks from "../Tasks/tasksManager"
import friendActivator from "../friends/friendActivator";
import eventDashboard from "../Events/eventMain"
import chat from "../chat/chat"

const dashboardActivator = () => {
    formPrinter.printLogoutForm()
    friendActivator()
    chat()
    //this prints the tasks section after login - MT
    tasks.tasksActivator(sessionStorage.getItem("activeUser"));
    //This is just a placeholder until we get all the other pieces
    document.querySelector("#header").innerHTML += `you are logged in`
    //Adds event dashboard
    eventDashboard();
}

export default dashboardActivator;

//src\scripts\Events\eventMain.js
