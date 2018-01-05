// DECLARATIONS
require('dotenv').config()
var express = require('express')
var app = express()


// MIDDLEWARES

// ALLOW CORS
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

app.use(express.static('public'))
app.use(acceptOverride())
app.use(allowCrossDomain);

// ROUTES

app.get('/', (req, res, next) => {
  
})

// SERVER
var port = process.env.PORT || 8000;
app.listen(port, function () {
  console.log('SonicCook listening on port 8000!');
});
