angular.module('pdApp')
    .controller('CadastroCarroController', CadastroCarroController);

function CadastroCarroController($scope, $state) {
    $scope.texto = 'Cadastro de Carro';
}