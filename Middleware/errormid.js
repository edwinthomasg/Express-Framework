var express = require('express')
var app = express()

app.get('/',(req,res)=>{
    res.send("Home Page !!!")
})
app.get('/login',(req,res)=>{
    res.send("Login Page")
})

app.listen(5070)