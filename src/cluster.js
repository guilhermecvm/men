var cluster = require('cluster')

if (cluster.isMaster) {
  // count machine cpu's
  var cpuCount = require('os').cpus().length

  console.log(`Master cluster setting up ${cpuCount}`)

  for (var i = 0; i < cpuCount; i++) {
    // creates a fork and run this script again without being master
    cluster.fork()
  }

  cluster.on('online', worker => console.log(`worker ${worker.process.pid} is online`))
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died with code ${code} and signal ${signal}`)
    console.log('starting a new worker')
    cluster.fork()
  })
} else {
  require('./index')
}
