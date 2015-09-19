angular.module('reddit')

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('articles', {
      url: '/',
      template: '<h1>{{whereAmI}}</h1>',
      controller: 'redditController'
    })

    .state('new', {
      url: '/new',
      template: '<h1>{{whereAmI}}</h1>',
      controller: 'newArticleController'
    })

    .state('article', {
      url: '/article/:id',
      template: '<h1>{{whereAmI}}</h1>',
      controller: 'articleController'
    })

    .state('favorites', {
      url: '/favorites',
      template: '<h1>{{whereAmI}}</h1>',
      controller: 'favoritesController'
    });

    // catchall
   $urlRouterProvider.otherwise('/');

}]);