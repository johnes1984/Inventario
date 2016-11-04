




app.controller('ClientesController', function($scope,$http) {
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