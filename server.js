var express = require('express')
var app = express()

app.set('view engine','ejs')

app.get('/',(req,res,next)=>{
    console.log("Home Page")
    res.send("Home Page")
    next()
})
app.get('/info',(req,res)=>{
    var name = 'gopiya'
    console.log(req.url)
    res.render('info',{name,
        url:req.url})
})
console.log("hello hi")

app.listen(5000)