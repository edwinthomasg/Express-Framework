var express = require('express')
var alert = require('alert')
var app = express()

app.use((req,res,next)=>{
    alert("Welcome !!")
    console.log("Middleware 1")
    next()
})
app.get('/',(req,res,next)=>{
    console.log("Home Page")
    res.send("Home Page")
    next()
})
app.use((req,res,next)=>{
    console.log("Middleware 2")
    alert("End")
})
app.listen(8080)
/**The action between req and res is said to be middleware
 * It will be executed first for each routing
 * Sequential flow
 */