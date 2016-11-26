angular.module('pdApp')
    .controller('IndexRouterController', IndexRouterController);

function IndexRouterController($scope, $state) {
    $scope.abrirPagina = abrirPagina;

    function abrirPagina(nomeState) {
        console.log(arguments);
        $state.go(nomeState);
    }
}