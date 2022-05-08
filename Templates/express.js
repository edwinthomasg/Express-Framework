var express = require('express')
var app = express()

app.set('view engine','pug')
app.get('/',(req,res)=>{
    let user = {
        name:'edwin',
        age:21
    }
    res.render('index',{user})
})
app.listen(8080)