var app = require('./app/app')

var port = process.env.PORT || 3000

app.listen(port, error => {
  if (error) {
    console.log(error)
  } else {
    console.info('🌎 Listening at http://localhost:%s/', port)
  }
})
