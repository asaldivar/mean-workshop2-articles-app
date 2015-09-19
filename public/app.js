// create angular module
angular.module('reddit', ['ui.router'])

.controller('redditController', ['$scope', function($scope) {
  $scope.whereAmI = 'redditController';
}])

.controller('newArticleController', ['$scope', function($scope) {
  $scope.whereAmI = 'newArticleController';
}])

.controller('articleController', ['$scope', function($scope) {
  $scope.whereAmI = 'articleController';
}])

.controller('favoritesController', ['$scope', function($scope) {
  $scope.whereAmI = 'favoritesController';
}]);