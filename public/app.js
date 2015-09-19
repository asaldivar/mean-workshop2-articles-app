// create angular module
angular.module('reddit', ['ui.router'])

.controller('redditController', ['$scope', function($scope) {
  $scope.whereAmI = 'redditController';
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
}]);