var express = require('express');
var apiRouter = express.Router();
var Article = require('../models/article');

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

module.exports = apiRouter;