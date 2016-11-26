angular.module('pdApp')
    .config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider) {
    var cadastroBairro = {
        name: 'cadastroBairro',
        url: '/cadastro-bairro',
        templateUrl: 'app/view/bairro/cadastro-bairro.html',
        resolve: {
            carregarController: function ($ocLazyLoad) {
                return $ocLazyLoad.load('app/view/bairro/cadastro-bairro.controller.js');
            }
        }
    };

    $stateProvider
        .state('cadastroBairro', cadastroBairro);
}