var express = require('express')
var bodyParser = require('body-parser')

var v1 = require('./routes/v1/index')

var app = express()

// create application/json parser
app.use(bodyParser.json())

 // routes
app.use('/v1', v1)

module.exports = app
