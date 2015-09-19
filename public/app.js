// create angular module
angular.module('reddit', [])

.controller('redditController', ['$scope', function($scope) {
  $scope.whereAmI = 'redditController';
}]);