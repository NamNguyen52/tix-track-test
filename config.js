function config($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html'
    })

}

angular
  .module('ngTest')
  .config(config)
  .run(function($rootScope, $state) {
    $rootScope.$state = $state;
  })
