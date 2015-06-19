var app = angular.module('app', ['ngRoute', 'shoppinpal.mobile-menu']);
        app.config(function ($routeProvider) {
          $routeProvider
            .when('/about', {
              templateUrl: 'views/about.html',
              controller: 'ContentCtrl',
              controllerAs: 'content'
            })
            .when('/skills', {
              templateUrl: 'views/skills.html',
              controller: 'ContentCtrl',
              controllerAs: 'content'
            })
            .when('/portfolio', {
              templateUrl: 'views/portfolio.html',
              controller: 'ContentCtrl',
              controllerAs: 'content'
            })
            .otherwise({
              redirectTo: '/about'
            });
        });