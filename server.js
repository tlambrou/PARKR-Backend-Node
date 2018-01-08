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
  var timedParking = require('./resources/data/TimedParkingData.json')
  var sampleParking = require('./resources/data/SampleTimedParking.json')
  res.json({
    message: "We're working!",
    hereIsTheSampleData: sampleParking,
    hereIsTheFullDataSample: [timedParking.features[0], timedParking.features[1], timedParking.features[2]]
  })
  console.log("Data loaded successfully!")
})

app.get('/import', (req, res, next) => {

})

// SERVER
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Parkr-Backend listening on port 3000!')
});
