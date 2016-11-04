
  'use strict';
var app = angular.module('prueba', ['ngAnimate','ngRoute']);


app.config(function($routeProvider) {

    $routeProvider
        .when('/clientes', {
            templateUrl : 'Views/clientes.html',
            controller  : 'mainController'
        })
        .when('/acerca', {
            templateUrl : 'Views/acerca.html',
            controller  : 'aboutController'
        })
        .otherwise({
            redirectTo: '/'
        });

    });


app.controller('mainController', function($scope,$http) {
    $scope.message = 'Clientes';


$scope.myfuncion = function(data){
	   $scope.message = data;




	   $http.post('http://www.suelasax.co:3033/userlogin', data)
            .success(function (data, status) {
            })
            .error(function (data, status) {
            });
}

});


app.controller('aboutController', function($scope) {
    $scope.message = 'Acerca';


$scope.myfuncion = function(){
	$.notify("Hello World");
}

});



