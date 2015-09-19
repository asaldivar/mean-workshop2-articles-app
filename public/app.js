// create angular module
angular.module('reddit', ['ui.router'])

.controller('redditController', ['$scope', 'apiService', 'favoriteService', function($scope, apiService, favoriteService) {
  apiService.index()
  .then(function(articles) {
    $scope.articles = articles;
  });

  $scope.favorite = function(article) {
    favoriteService.saveFavorite(article);
  }
}])

.controller('newArticleController', ['$scope', 'apiService', '$state', function($scope, apiService, $state) {
  $scope.createArticle = function() {
    apiService.create($scope.article);

    $state.go('articles');
  }
}])

.controller('articleController', ['$scope', function($scope) {
  $scope.whereAmI = 'articleController';
}])

.controller('favoritesController', ['$scope', 'favoriteService', function($scope, favoriteService) {
  $scope.favorites = favoriteService.favorites
}])

.directive('panelHeader', function() {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: '/views/panel-header.html'
  }
})

.service('favoriteService', function() {
  this.favorites = [];

  this.saveFavorite = function(article) {
    this.favorites.push(article)
  }
});