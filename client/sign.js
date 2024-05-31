function disableSubmit() {
    document.getElementById("submit").disabled = true
}
  
function activateButton(element) {
    if(element.checked) {
        document.getElementById("submit").disabled = false
    } else  {
          document.getElementById("submit").disabled = true
    }
}
 

function register(){
    let firstName = document.querySelector("#firstname").value
    let lastName = document.querySelector("#lastname").value
    let username = document.querySelector("#username").value
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    let passconfirm = document.querySelector("#passconfirm").value
    if (firstName === "" || lastName === "" || username === "" || email === "" || password === "" || passconfirm === "") {
        alert("Empty field detected, can't sign up user")
        return
    }

    if(username.length > 8 || username.length < 4){
        alert("Invalid username, username must be between 4-8 characters in length")
        return
    }
    if(!email.includes("@")){
        alert("Invalid email address")
        return
    }
    if(!password.includes("$") || password.length > 10 || password.length < 5){
        alert("Invalid password, password must be between 5-10 characters in length and contain a dollarsigh ($) symbol")
        return
    }
    if(password != passconfirm){
        alert("Passwords don't match")
        return
    }
    
    let user = document.querySelector("#username").value
    let pass = document.querySelector("#password").value
    localStorage.setItem("user", user)
    localStorage.setItem("pass", pass)
    window.location.href = "login.html"
}