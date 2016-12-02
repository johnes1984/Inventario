

var app = angular.module('prueba', ['ngAnimate','ngRoute']);


app.config(function($routeProvider) {

    $routeProvider
        .when('/clientes', {
            templateUrl : 'Views/Clientes.html',
            controller  : 'ClientesController'
        })
        .when('/usuarios/list', {
            templateUrl : 'Views/Usuarios/list.html'
        })
         .when('/usuarios/add', {
            templateUrl : 'Views/Usuarios/Usuarios.html'
        })
        .when('/acerca', {
            templateUrl : 'Views/acerca.html',
            controller  : 'Controladores/aboutController'
        })
        .otherwise({
            redirectTo: '/'
        });

    });

