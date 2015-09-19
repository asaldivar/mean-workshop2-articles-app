var Article = require('../models/article');

function articleById(request, response, next, id) {
  Article.findById(id, function(error, article) {
    if (error) console.error('Could not update article b/c:', error);

    request.article = article; // store article in request
    next(); // callback to move onto next handler
  });
}

function create(request, response) {
  // create a new article based of user data
  var article = new Article(request.body);

  // save the article
  article.save(function(error) {
    if (error) console.error('Not able to create article b/c:', error);

    response.json({message: 'Article successfully created'});
  });
}

function index(request, response) {
  Article.find(function(error, articles) {
    if (error) console.error('Could not retrieve articles b/c:', error);

    response.json(articles);
  });
}

function show(request, response) {
  response.json(request.article);
}

function update(request, response) {
  var data = request.body;
  var article = request.article

  Object.keys(data).forEach(function(key) {
    article.set(key, data[key]); // set replaces the value of a field with the specified value
  });

  article.save(function(error) {
    if (error) console.error('Could not update article b/c:', error);

    response.json({message: 'Article successfully updated'});
  });
}

function destroy(request, response) {
  Article.remove({ _id: request.params.article_id }, function(error) {
    if (error) console.error('Could not delete article b/c:', error);

    response.json({message: 'Article successfully deleted'});
  })
}

module.exports = {
  articleById: articleById,
  create: create,
  index: index,
  show: show,
  update: update,
  destroy: destroy
};