angular.module('pdApp').controller('IndexWatchController', IndexWatchController);

IndexWatchController.$inject = ['$scope'];

function IndexWatchController($scope) {
    $scope.cor = '';
    $scope.styleDiv = {
        width: '150px',
        height: '150px'
    };

    $scope.dispararEvento = dispararEvento;

    $scope.$watch('cor', onWatchCor);

    function onWatchCor(valorNovo, valorAntigo) {
        if (valorNovo === valorAntigo) {
            return;
        }
        $scope.styleDiv.backgroundColor = valorNovo;
    }

    $scope.$on('testeEnvioEvento', onTesteEnvioEvento);

    function onTesteEnvioEvento(event, data) {
        var teste = data;
    }

    function dispararEvento() {
        $scope.$broadcast('testeEnvioEvento',{valor: 'Enviando parâmetro'});
    }
}