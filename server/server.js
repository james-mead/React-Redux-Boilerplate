const path = require('path')
const express = require('express')
const bodyparser = require('body-parser')
// const apiRoutes = require('./routes/api')

const server = express()

server.use(bodyparser.json())
server.use(express.static('dist'))
// server.use(passport.initialize())

// server.use('/api/v1/', apiRoutes)

server.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

module.exports = server
