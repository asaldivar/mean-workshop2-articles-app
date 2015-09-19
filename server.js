var express = require('express');
var app = express();
var apiRouter = express.Router();
var mongoose   = require('mongoose');
var Article = require('./app/models/article');
var bodyParser = require('body-parser'); // express is an extremely minimalist framework so we need body-parser to help us handle req.body

// configure body-parser so we can work with request.body
app.use(bodyParser.urlencoded({ extended: true })); // handle urleconded bodies; extended true means in any form (not just key-value pairs)
app.use(bodyParser.json()); // only parsing json

// connect to DB which is on port 27017
mongoose.connect('mongodb://localhost:27017/mean-articles');

// configure router middleware
apiRouter.route('/articles')

  .post(function(request, response) {
    // create a new article based of user data
    var article = new Article(request.body);

    // save the article
    article.save(function(error) {
      if (error) console.error('Not able to create article b/c:', error);

      response.json({message: 'Article successfully created'});
    });
  })

  .get(function(request, response) {
    // get all articles
    Article.find(function(error, articles) {
      if (error) console.error('Could not retrieve articles b/c:', error);

      response.json(articles);
    });
  });

apiRouter.route('/articles/:article_id')

  .get(function(request, response) {
    //get one article
    var id = request.params.article_id;

    Article.findById(id, function(error, article) {
      if (error) console.error('Could not update article b/c:', error);

      response.json(article);
    });
  })

  .patch(function(request, response) {
    // update an article
    var id = request.params.article_id;

    Article.findById(id, function(error, article) {
      if (error) console.error('Could not update article b/c:', error);

        var data = request.body;

        Object.keys(data).forEach(function(key) {
          article.set(key, data[key]); // set replaces the value of a field with the specified value
        });

        article.save(function(error) {
          if (error) console.error('Could not update article b/c:', error);

          response.json({message: 'Article successfully updated'});
        });
    });
  })

  .delete(function(request, response) {
    // delete an article
    var id = request.params.article_id;

    Article.remove({ _id: id }, function(error) {
      if (error) console.error('Could not delete article b/c:', error);

      response.json({message: 'Article successfully deleted'});
    })
  });

// apply router middleware
app.use(apiRouter);

var port = 3000;

app.get('/', function(request, response) {
  response.json({message: 'this is json'})
});

app.listen(port);

console.log('Server is running on port', port);