var express = require('express');
var app = express();
var mongoose   = require('mongoose');
var bodyParser = require('body-parser'); // express is an extremely minimalist framework so we need body-parser to help us handle req.body
var apiRouter = require('./app/config/routes'); // bring in API routes

// configure body-parser so we can work with request.body
app.use(bodyParser.urlencoded({ extended: true })); // handle urleconded bodies; extended true means in any form (not just key-value pairs)
app.use(bodyParser.json()); // only parsing json

// connect to DB which is on port 27017
mongoose.connect('mongodb://localhost:27017/mean-articles');

// apply router middleware
app.use(apiRouter);

var port = 3000;

app.get('/', function(request, response) {
  response.json({message: 'this is json'})
});

app.listen(port);

console.log('Server is running on port', port);