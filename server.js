var express = require('express')
var app = express()

var port = 3000

app.get('/', function(request, response) {
  response.json({message: 'this is json'})
});

app.listen(port)

console.log('Server is running on port', port);