var express = require('express')
var route = express.Router()
var app = express()
route.get('/',(req,res)=>{
    console.log("From Router : Hello !")
    res.send("From Router : Hello !")
})
app.use(route)
app.listen(3000)

/**Router is a middleware , we cant create directly a
 * server using router.This is used mainly for nested
 * paths.
 */