
angular.module('app').controller('HomeController', ['$scope', function ($scope) {

    $scope.Titulo = "Contador de Caracteres";

    $scope.CalcularQuantidadePalavras = function(campoPrincipal) {
        $scope.QuantidadePalavras = campoPrincipal.split(/\s+/g).length;
    }
    
}]);

