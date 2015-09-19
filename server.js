var express = require('express');
var app = express();
var apiRouter = express.Router();
var mongoose   = require('mongoose');

// connect to DB which is on port 27017
mongoose.connect('mongodb://localhost:27017/mean-articles');

// configure router middleware
apiRouter.route('/articles')

  .post(function() {
    // create data
  })

  .get(function() {
    // get all articles
  });

apiRouter.route('/article/:article_id')

  .get(function() {
    //get one article
  })

  .patch(function() {
    // update an article
  })

  .delete(function() {
    // delete an article
  });

// apply router middleware
app.use(apiRouter);

var port = 3000;

app.get('/', function(request, response) {
  response.json({message: 'this is json'})
});

app.listen(port);

console.log('Server is running on port', port);