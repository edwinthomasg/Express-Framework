var express = require('express')
var app = express()

app.get('/',(req,res)=>{
    if(req.query.name != 'edwin')
    throw new Error("Invalid User")
    else
    res.send("<h1 style=\"color:red\">Hello "+req.query.name.toUpperCase()+" </h1>")
})
app.listen(3090)