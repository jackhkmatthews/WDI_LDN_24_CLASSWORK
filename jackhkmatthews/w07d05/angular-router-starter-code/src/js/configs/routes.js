angular
  .module('todoApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
//angular ui methods: $stateProvider, $urlRouterProvider
function Router($stateProvider, $urlRouterProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  //routes go here
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/js/views/home.html'
    })
    .state('archive', {
      url: '/archive',
      templateUrl: '/js/views/archive.html'
    });

  $urlRouterProvider.otherwise('/');


}
