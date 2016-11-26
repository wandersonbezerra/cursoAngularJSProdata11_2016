angular.module('pdApp').controller('IndexController', IndexController);

function IndexController($scope) {
    $scope.nome = 'Wanderson';
    $scope.ola = ola;
    function ola() {
        alert('Olá');
    }

    $scope.$on('testeEnvioEvento', onTesteEnvioEvento);

    function onTesteEnvioEvento(event, data) {
        var teste = data;
    }
}