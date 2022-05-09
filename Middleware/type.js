var express = require('express')
var morgan = require('morgan')
var helmet = require('helmet')

var app = express()
app.use(morgan("common"))
app.use(helmet())

app.get('/',(req,res)=>{
    res.send("Hello")
    console.log(req.baseUrl)
})
app.get('/user',(req,res)=>{
    res.send("Users Page")
    console.log("Base Url ",req.baseUrl,req.body)
})
app.listen(7090)