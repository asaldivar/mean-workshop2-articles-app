angular.module('reddit')

.factory('apiService', ['$http', function($http) {
  return {
    index: function() {
      return $http.get('/api/articles')
      .then(function(response) {
        var articles = response.data;

        return articles
      });
    },
    create: function(article) {
      $http.post('/api/articles', article);
    },
    update: function(article) {
      $http.patch('/api/articles/' + article._id, article);
    }
  }
}]);