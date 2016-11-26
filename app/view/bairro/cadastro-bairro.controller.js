angular.module('pdApp')
    .controller('CadastroBairroController', CadastroBairroController);

CadastroBairroController.$inject = ['$scope', '$rootScope', 'AlertService', '$filter'];

function CadastroBairroController($scope, $rootScope, AlertService, $filter) {
    $scope.texto = 'Cadastro de Bairro';
    $scope.entidade = {};
    $scope.listaBairro = [];
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.carregarBairro = carregarBairro;
    $scope.excluirBairro = excluirBairro;
    $scope.visualizarBairro = visualizarBairro;


    $scope.gridOptions = {
        columnDefs: [
            {name: 'Nome do Bairro', field: 'nomeBairro'},
            {name: 'Nome da Cidade', field: 'nomeCidade'},
            {name: 'Estado', field: 'estado'},
            {
                name: '',
                field: 'excluirBairro',
                cellTemplate: 'app/template/grid/cell-template-bairro-botoes.html',
                width: 80
            },
        ],
        data: 'listaBairro'
    };

    function salvar() {
        $scope.bairroForm.nomeBairro.$setTouched();
        $scope.bairroForm.nomeCidade.$setTouched();
        $scope.bairroForm.estado.$setTouched();
        if ($scope.bairroForm.$invalid) {
            AlertService.error('Formulário inválido', 'Atenção');
            return false;
        }
        if ($scope.entidade.idBairro) {
            alterar();
            return;
        }
        $scope.entidade.idBairro = new Date().getTime();

        $scope.listaBairro.push($scope.entidade);
        AlertService.success('Registro salvo com sucesso!');
        limpar();
    }

    function alterar() {
        var indexBairro = getIndexBairro($scope.entidade.idBairro);
        $scope.listaBairro[indexBairro] = $scope.entidade;
        AlertService.success('Registro alterado com sucesso!');
        limpar();
    }

    function getIndexBairro(idBairro) {
        for (var i in $scope.listaBairro) {
            if ($scope.listaBairro[i].idBairro === idBairro) {
                return i;
            }
        }
    }

    function carregarBairro(bairro) {
        $scope.entidade.idBairro = bairro.idBairro;
        $scope.entidade.nomeBairro = bairro.nomeBairro;
        $scope.entidade.nomeCidade = bairro.nomeCidade;
        $scope.entidade.estado = bairro.estado;
    }

    function excluirBairro(bairro) {
        for (var i in $scope.listaBairro) {
            if ($scope.listaBairro[i] === bairro) {
                $scope.listaBairro.splice(i, 1);
                AlertService.info('Registro excluído com sucesso!');
            }
        }
    }

    function visualizarBairro(bairro) {
        $("#modalContainer").load('app/template/bairro-modal.html', function () {
            $('#modalBairro .codigo-bairro').html(bairro.idBairro);
            $('#modalBairro .nome-bairro').html(bairro.nomeBairro);
            $('#modalBairro .nome-cidade').html(bairro.nomeCidade);
            $('#modalBairro .estado').html(bairro.estado);
            $("#modalBairro").modal('show');
            $('#modalBairro .bt-close').modal('close');
        });
    }

    function limpar() {
        $scope.entidade = {};
        $scope.bairroForm.$setUntouched();
        angular.element('#nomeBairro').focus();
    }
}