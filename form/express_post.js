var express = require('express')

var app = express()
var parser = require('body-parser')

app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.post('/home',(req,res)=>{
    let details = {
        name : req.body.user_name,
        email : req.body.user_email
    }
    console.log(req.body)
    res.render('home',{details})

})
app.listen(4080)