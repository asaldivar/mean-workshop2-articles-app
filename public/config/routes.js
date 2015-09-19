angular.module('reddit')

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('articles', {
      url: '/',
      templateUrl: './views/articles.html', // you can link to a view by using the property templateUrl opposed to template
      controller: 'redditController' // connect to a controller by referring to its name
    })

    .state('new', {
      url: '/new',
      templateUrl: './views/new.html',
      controller: 'newArticleController'
    })

    .state('article', {
      url: '/article/:id',
      templateUrl: './views/article.html',
      controller: 'articleController'
    })

    .state('favorites', {
      url: '/favorites',
      templateUrl: './views/favorites.html',
      controller: 'favoritesController'
    });

    // catchall
   $urlRouterProvider.otherwise('/');

}]);