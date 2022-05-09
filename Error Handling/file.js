var express = require('express')
var fs = require('fs')
var app = express()
app.get('/',(req,res,next)=>{
    fs.readFile('./express.js',{encoding:'utf-8'},(err,data)=>{
        if(err)
        {
            // throw new Error("File Not Found ....") it wont be sent as response
            next("File Not Found .... ")
        }
        else
        {
            res.json({type:"file",data})
        }
    })
})
app.use((err,req,res,next)=>{
    console.log("File Not Found")
    res.send(err)
})

app.listen(3060)