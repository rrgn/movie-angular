var app = angular.module('movie-app', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'MainController',
      templateUrl: 'main.html'
    })
    .when('/:movieId', {
      controller: 'DetailsController',
      templateUrl: 'details.html'
    })
  });

  app.controller('MainController', function($scope, $http) {
    $http.get('http://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5').success(function(data) {
      $scope.data = data;
      // console.log(data);
    });
  });

  app.controller('DetailsController', function($scope, $http, $routeParams) {
    $scope.movieId = $routeParams.movieId
    $http.get('http://api.themoviedb.org/3/movie/' + $routeParams.movieId + '?api_key=fec8b5ab27b292a68294261bb21b04a5').success(function(details) {
    $scope.details = details;
    // console.log(details);
    });
  });
