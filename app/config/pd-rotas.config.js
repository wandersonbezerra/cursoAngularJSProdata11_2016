angular.module('pdApp')
    .config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider) {
    var cadastroCarro = {
        name: 'cadastroCarro',
        url: '/cadastro-carro',
        templateUrl: 'app/view/carro/cadastro-carro.html',
        resolve: {
            carregarController: function ($ocLazyLoad) {
                return $ocLazyLoad.load('app/view/carro/cadastro-carro.controller.js');
            }
        }
    };

    var pesquisaCarro = {
        name: 'pesquisaCarro',
        url: '/pesquisa-carro',
        templateUrl: 'app/view/carro/pesquisa-carro.html',
        resolve: {
            carregarController: function ($ocLazyLoad) {
                return $ocLazyLoad.load('app/view/carro/pesquisa-carro.controller.js');
            }
        }
    };

    $stateProvider
        .state('cadastroCarro', cadastroCarro)
        .state('pesquisaCarro', pesquisaCarro);
}