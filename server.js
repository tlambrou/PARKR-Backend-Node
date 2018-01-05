// DECLARATIONS
require('dotenv').config()
var express = require('express')
var app = express()

// Allow CORS
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*")
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next();
}

// MIDDLEWARE
app.use(express.static('public'))
app.use(allowCrossDomain)

// ROUTES
app.get('/', (req, res, next) => {
  res.json({message: "We're working!"})
})

app.get('/import', (req, res, next) => {

})

// SERVER
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Parkr-Backend listening on port 3000!')
});
