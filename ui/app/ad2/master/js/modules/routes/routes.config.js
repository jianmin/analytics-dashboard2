/**=========================================================
 * Module: config.js
 * App routes and resources configuration
 =========================================================*/

(function() {
  'use strict';

  angular.module('app.routes').config(routesConfig);

  routesConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider'];
  function routesConfig($stateProvider, $locationProvider, $urlRouterProvider, helper){        
    // Set the following to true to enable the HTML5 Mode
    // You may have to set <base> tag in index and a routing configuration in your server
    $locationProvider.html5Mode(false);

    // defaults to dashboard
    $urlRouterProvider.otherwise('/app/welcome');

    // 
    // Application Routes
    // -----------------------------------   
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: helper.basepath('app.html'),
        resolve: helper.resolveFor('modernizr', 'icons'),
        controller: ['$rootScope', function($rootScope) {
          $rootScope.app.layout.isPage = false;
        }]
      })
      .state('app.welcome', {
        url: '/welcome',
        title: 'Welcome',
        templateUrl: helper.basepath('welcome.html')
      })
      .state('app.dashboard', {
        url: '/dashboard',
        title: 'Dashboard',
        templateUrl: helper.basepath('dashboard.html')
      })
      //
      // Models 
      // ----------------------------------- 
      .state('app.classification', {
        url: '/classification',
        title: 'Classification Report',
        templateUrl: helper.basepath( 'model.classification.html' )
      })
      .state('app.association', {
        url: '/association',
        title: 'Association Report',
        templateUrl: helper.basepath( 'model.association.html' )
      })
      //
      // Single Page Routes
      // -----------------------------------
      .state('page', {
        url: '/page',
        templateUrl: 'app/pages/page.html',
        resolve: helper.resolveFor('modernizr', 'icons'),
        controller: ['$rootScope', function($rootScope) {
          $rootScope.app.layout.isBoxed = false;
          $rootScope.app.layout.isPage = true;
        }]
      })
      .state('page.404', {
        url: '/404',
        title: 'Not Found',
        templateUrl: 'app/pages/404.html'
      })
      // 
      // CUSTOM RESOLVES
      //   Add your own resolves properties
      //   following this object extend
      //   method
      // ----------------------------------- 
      // .state('app.someroute', {
      //   url: '/some_url',
      //   templateUrl: 'path_to_template.html',
      //   controller: 'someController',
      //   resolve: angular.extend(
      //     helper.resolveFor(), {
      //     // YOUR RESOLVES GO HERE
      //     }
      //   )
      // })
      ;
  } // routesConfig
})();
