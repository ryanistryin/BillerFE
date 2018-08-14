angular.module('BillerFrontEnd', [
  'ngRoute',
  'mobile-angular-ui',
  'BillerFrontEnd.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});