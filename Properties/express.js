var express = require('express')
var app = express()

app.get('/',(req,res)=>{
    
    console.log(req.cookies)
    console.log(req.hostname)
    console.log(req.ip)
    res.send("Home Page")
})
app.get('/login/user',(req,res,next)=>{
    res.send("Login / User")
    next()
})
app.use('/login/user',(req,res)=>{
    console.log(req.baseUrl,req.originalUrl)
    console.log("Middleware")
})

app.listen(7020)