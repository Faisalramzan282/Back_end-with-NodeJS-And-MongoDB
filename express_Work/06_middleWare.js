// var express = require('express')
// var app = express()

// app.use(function (req, res, next) {
//   console.log('Time:', Date.now())
//   next()
// })
// app.use('/user/:id', function (req, res, next) {
//     console.log('Request Type:', req.method)
//     next()
//   })

//   app.get('/user/:id', function (req, res, next) {
//     res.send('USER')
//   })

//   app.use('/user/:id', function (req, res, next) {
//     console.log('Request URL:', req.originalUrl)
//     next()
//   }, function (req, res, next) {
//     console.log('Request Type:', req.method)
//     next()
//   })

//   app.use('/user/:id', function (req, res, next) {
//     console.log('Request URL:', req.originalUrl)
//     next()
//   }, function (req, res, next) {
//     console.log('Request Type:', req.method)
//     next()
//   })

//   app.get('/user/:id', function (req, res, next) {
//     // if the user ID is 0, skip to the next route
//     if (req.params.id === '0') next('route')
//     // otherwise pass the control to the next middleware function in this stack
//     else next()
//   }, function (req, res, next) {
//     // send a regular response
//     res.send('regular')
//   })
  
//   // handler for the /user/:id path, which sends a special response
//   app.get('/user/:id', function (req, res, next) {
//     res.send('special')
//   })

//   function logOriginalUrl (req, res, next) {
//     console.log('Request URL:', req.originalUrl)
//     next()
//   }
  
//   function logMethod (req, res, next) {
//     console.log('Request Type:', req.method)
//     next()
//   }
  
//   var logStuff = [logOriginalUrl, logMethod]
//   app.get('/user/:id', logStuff, function (req, res, next) {
//     res.send('User Info')
//   })

//------------------------------------------------------------------------------

var express = require('express')
var app = express()
var cookieParser = require('cookie-parser')

// load the cookie-parsing middleware
app.use(cookieParser())