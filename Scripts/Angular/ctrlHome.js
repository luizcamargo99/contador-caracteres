
angular.module('app').controller('HomeController', ['$scope', function ($scope) {

    $scope.Titulo = "Character Counter";

    $scope.CalcularQuantidadePalavras = function(campoPrincipal) {
        $scope.QuantidadePalavras = campoPrincipal.split(/\s+/g).length;
    }
    
}]);

