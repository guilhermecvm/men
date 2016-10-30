import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import v1 from './routes/v1'

var app = express()

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/men-seed')
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  // we're connected!
})

app.use(bodyParser.json())

 // routes
app.use('/v1', v1)


// log error middleware
app.use((err, req, res, next) => {
  console.error(err)
  next(err)
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// custom error middleware
app.use((err, req, res, next) => {
  if (err.status) {
    res.status(err.status).send({
      title: 'Error',
      message: err.message
    })
  } else {
    next(err)
  }
})

// catch all error middleware
app.use((err, req, res, next) => {
  res.status(500).send({
    title: 'Error',
    message: 'We encountered an internal error. Please try again.'
  })
})

export default app
