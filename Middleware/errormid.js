var express = require('express')
var app = express()
var router = express.Router()
app.get('/',(req,res)=>{
    res.send("Home Page ... !")
})
app.get('/Profile',(req,res)=>{
    res.send("Profile Page ..!")
})
router.get('/User1',(req,res)=>{
    res.send("User 1 ..")
})
router.get('/User2',(req,res)=>{
    res.send("User 2 ..")
})
app.use('/Profile',router)
app.get('*',(req,res,next)=>{
    console.log("Unknown Path")
    var error = new Error("OOps !! Page not found")
    next(error)
})
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send("Page not found")
})
app.listen(7070)