const user = localStorage.getItem('user')
document.querySelector("#hello").innerHTML = `Hello ${user}`