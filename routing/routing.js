var express = require('express')
var router = express.Router()

router.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
router.get('/youtube',(req,res)=>{
    res.redirect('https://www.youtube.com')
})
router.get('/mdn/router',(req,res)=>{
    res.redirect('https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes')
})

module.exports = router