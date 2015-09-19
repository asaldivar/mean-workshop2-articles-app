var express = require('express');
var app = express();
var mongoose   = require('mongoose');
var bodyParser = require('body-parser'); // express is an extremely minimalist framework so we need body-parser to help us handle req.body
var apiRouter = require('./app/config/routes'); // bring in API routes

// configure body-parser so we can work with request.body
app.use(bodyParser.urlencoded({ extended: true })); // handle urleconded bodies; extended true means in any form (not just key-value pairs)
app.use(bodyParser.json()); // only parsing json

var DB = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/mean-articles';

// connect to DB which is on port 27017
mongoose.connect(DB);

// apply router middleware
// namespace your api
app.use('/api', apiRouter);

// listen to port as defined or default 3000
var port = process.env.PORT || 3000;

// serve static files
app.use(express.static(__dirname + '/public'));

// this is the entry way into the client-side
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

app.listen(port);

console.log('Server is running on port', port);