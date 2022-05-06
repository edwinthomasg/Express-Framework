var express = require('express')

var app = express()

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.get('/home',(req,res)=>{
    let details = {
        name : req.query['user_name'],
        email : req.query['user_email']
    }
    res.render('home',{details})
})
app.listen(4050)