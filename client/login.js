let localuser = localStorage.getItem('user')
let localpass = localStorage.getItem('pass')
console.log(`Username: ${localuser} Password: ${localpass}`);

function login(){
    let username = document.querySelector("#username").value
    let password = document.querySelector("#password").value
    if(localuser == null || localpass == null){
        alert("No user was saved. Please sign up.")
        return
    }
    if (username != localuser) {
        alert("Can't recognize username")
        return
    } else if (password != localpass){
        alert("False password")
        return
    }
    window.location.href = "homepage.html"
}