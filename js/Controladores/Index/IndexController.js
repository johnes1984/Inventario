

var app = angular.module('prueba', ['ngAnimate','ngRoute']);


app.config(function($routeProvider) {

    $routeProvider
        .when('/clientes', {
            templateUrl : 'Views/Clientes.html',
            controller  : 'ClientesController'
        })
        .when('/acerca', {
            templateUrl : 'Views/acerca.html',
            controller  : 'Controladores/aboutController'
        })
        .otherwise({
            redirectTo: '/'
        });

    });

