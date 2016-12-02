




app.controller('UsuariosController', function($scope,$http) {
$scope.message = 'Usuarios';



 
$scope.listar = function(data){
 $http.get('http://localhost:3000/listarUsuarios')
            .success(function (data) {
                $scope.usuarios = data;
               
 });


}





$scope.Eliminar = function(identificador){
$scope.id = identificador;

  	$http.get('http://localhost:3000/DeleteUser/'+identificador)
            .success(function (data, status) {

			$scope.listar()
			
            })
            .error(function (data, status) {

            });
}



$scope.Guardar = function(data){
       $scope.message = data;

       $http.post('http://localhost:3000/userRegisters', data)
            .success(function (data, status) {


            })
            .error(function (data, status) {


            });

}






});