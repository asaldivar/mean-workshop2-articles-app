var express = require('express');
var app = express();
var mongoose   = require('mongoose');
var bodyParser = require('body-parser'); // express is an extremely minimalist framework so we need body-parser to help us handle req.body
var apiRouter = require('./app/config/routes'); // bring in API routes

// pull correct settings per environment
var config = require('./app/config/config.js')
var environmentSettings = config.config();

// configure body-parser so we can work with request.body
app.use(bodyParser.urlencoded({ extended: true })); // handle urleconded bodies; extended true means in any form (not just key-value pairs)
app.use(bodyParser.json()); // only parsing json

// connect to DB which is on port 27017
mongoose.connect(environmentSettings.db);

// apply router middleware
// namespace your api
app.use('/api', apiRouter);

// listen to port as defined or default 3000
var port = process.env.PORT || 3000;

app.get('/', function(request, response) {
  response.json({message: 'this is json'})
});

app.listen(port);

console.log('Server is running on port', port);