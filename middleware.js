var express = require('express')
var app = express()

app.get('/',(req,res)=>{
    console.log("Home page")
    res.send("home here ..!")
})
app.get('/Profile',(req,res)=>{
    console.log("Profile page")
    res.send("Profile Page")
})
app.use((req,res)=>{
    console.log("Middleware 1")
    // next()
})
// app.use((req,res)=>{
//     console.log("Middleware 2")
// })
app.listen(4000)