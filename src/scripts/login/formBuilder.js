//module to build the login and registration forms
// built by Sydney Wait

const formBuilder = {
    makeLoginForm: () => {
        return `<h1>Welcome to Nutshell!</h1>
    <input class="input login-input" type="text" name="userName" id="login-name" placeholder="Username"><br>
    <input class="input login-input" type="password" name="password" id="login-pass" placeholder="Password"><br>
    <div class="login-buttons"><button type="submit" class = "btn" id="login-btn">login</button>
    <button type="submit" class = "btn" id="reg-btn">register</button></div>`
    },


    makeRegisterForm: () => {

        return `<h1>Please Register:</h1>
    <input class="register-input" type="text" name="email" id="reg-email" placeholder="Email Address"><br>
    <input class="register-input" type="text" name="userName" id="reg-name" placeholder="Username"><br>
    <input class="register-input" type="password" name="password" id="reg-pass" placeholder="Password"><br>
    <button type="register" class = "btn" id="submit-reg-btn">register</button>`
    },
    makeLogoutForm: () => {
        return `<h3 id="nutshell-header">Nutshell</h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p id="nutshell-header-logout">      You are logged in</p><button type="register" class = "btn" id="logout-btn">logout</button>`
    }
}

export default formBuilder;