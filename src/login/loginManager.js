//This module handles the login and registration functionality of the APP
// Built by Sydney Wait

import formPrinter from "./printToDom.js"
import buildUserObject from "./objectBuilder.js"
import APIManager from "./APIManager.js"

const loginManager = () => {

    document.querySelector("#login-container").addEventListener("click", () => {

        const eventTarget = event.target.id.split("-")
        if (event.target.id === "login-btn") {
            const userName = document.querySelector("#login-name").value
            const password = document.querySelector("#login-pass").value
            //check if username is in the database, check if password matches
            //this is  where we will load the dashboard functionality
            console.log("You clicked the login button!")

        }
        if (event.target.id === "reg-btn") {
            console.log("you clicked the register button")

            formPrinter.printRegisterForm()

        }

        console.log(eventTarget)

        if (event.target.id === "submit-reg-btn") {
            console.log("you clicked the submit button")

            const userName = document.querySelector("#reg-name").value
            const password = document.querySelector("#reg-pass").value
            const email = document.querySelector("#reg-email").value



            const userObject = buildUserObject(userName, password, email)
            console.log("this is the userObject", userObject)
            APIManager.addUser(userObject);
        }

    })
}


export default loginManager;
