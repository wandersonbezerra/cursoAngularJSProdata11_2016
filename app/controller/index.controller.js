angular.module('pdApp').controller('IndexController', IndexController);

function IndexController($scope) {
    $scope.nome = 'Wanderson';
    $scope.ola = ola;
    function ola() {
        alert('Olá');
    }
}