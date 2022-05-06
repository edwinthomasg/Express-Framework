var express = require('express')
var app = express()
var routing = require('./routing.js')

app.use(routing)
app.listen(8090)