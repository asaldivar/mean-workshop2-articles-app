// create angular module
angular.module('reddit', ['ui.router'])

.controller('redditController', ['$scope', 'apiService', function($scope, apiService) {
  apiService.index()
  .then(function(articles) {
    $scope.articles = articles;
  });
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

.controller('favoritesController', ['$scope', function($scope) {
  $scope.whereAmI = 'favoritesController';
}])

.directive('panelHeader', function() {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: '/views/panel-header.html'
  }
});