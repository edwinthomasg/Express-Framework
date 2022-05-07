var express = require('express')
var router = express.Router()
var app = express()
app.get('/',(req,res,next)=>{
    console.log("Home Page")
    res.send("Home Page")
    next()
})
app.get('/java',(req,res)=>{
    console.log("Java Page")
    res.send("Java Page ...")
})
router.get('/class',(req,res)=>{
    res.send("Java Class Page")
    console.log("Middleware 1")
})
router.get('/for-loop',(req,res)=>{
    res.send("Java For Loop Page ...")
    console.log("Middleware 2")
})
app.use('/java',router)
// app.use('*',(req,res)=>{
//     res.status(500).send("Page Not Found")
// })
app.listen(8050)
