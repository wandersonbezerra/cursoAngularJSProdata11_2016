angular.module('pdApp')
    .controller('PesquisaCarroController', PesquisaCarroController);

function PesquisaCarroController($scope, $state) {
    $scope.texto = 'Pesquisa de Carro';
}