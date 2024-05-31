const express = require("express")
const app = express()
const bp = require('body-parser')

app.use(express.static('client'))
app.use(bp.urlencoded())


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/client/login.html')
})

app.post('/register', (request, response)=>{
    user = request.body.user
    response.send('Hello ' + user)
})

app.get('/homepage', (request, response)=>{
    response.sendFile(__dirname + '/client/homepage.html')
})
app.listen("3000", ()=>{console.log("Server is on")})