angular.module('pdApp').controller('CadastroCarroController', CadastroCarroController);

CadastroCarroController.$inject = ['$scope', 'AlertService', '$filter'];

function CadastroCarroController($scope, AlertService, $filter) {
    $scope.entidade = {};
    $scope.listaCarros = [];
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.carregarCarro = carregarCarro;
    $scope.excluirCarro = excluirCarro;


    $scope.gridOptions = {
        columnDefs: [
            {name: 'Nome do Carro', field: 'nomeCarro', minWidth: 230},
            {name: 'Cor', field: 'cor', width: 130},
            {
                name: 'Data de Lançamento',
                field: 'dataLancamento',
                cellTemplate: 'app/template/grid/cell-template-date.html',
                sortingAlgorithm: function (aDate, bDate, rowA, rowB, direction) {
                    if (aDate < bDate) {
                        return -1;
                    }
                    else if (aDate > bDate) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                }
            },
            {name: '', field: 'excluirCarro', cellTemplate: 'app/template/grid/cell-template-excluir.html', width: 80},
        ],
        data: 'listaCarros',
        enableColumnMenu: false
    };

    function salvar() {
        $scope.carroForm.nomeCarro.$setTouched();
        $scope.carroForm.cor.$setTouched();
        if ($scope.carroForm.$invalid) {
            AlertService.error('Formulário inválido', 'Atenção');
            return false;
        }
        if ($scope.entidade.idCarro) {
            alterar();
            return;
        }
        $scope.entidade.idCarro = new Date().getTime();

        $scope.entidade.nomeCarro = $filter('maiusculo')($scope.entidade.nomeCarro);
        $scope.listaCarros.push($scope.entidade);
        AlertService.success('Registro salvo com sucesso!');
        limpar();
    }

    function alterar() {
        var indexCarro = getIndexCarro($scope.entidade.idCarro);
        $scope.entidade.nomeCarro = $filter('maiusculo')($scope.entidade.nomeCarro);
        $scope.listaCarros[indexCarro] = $scope.entidade;
        AlertService.success('Registro alterado com sucesso!');
        limpar();
    }

    function getIndexCarro(idCarro) {
        for (var i in $scope.listaCarros) {
            if ($scope.listaCarros[i].idCarro === idCarro) {
                return i;
            }
        }
    }

    function carregarCarro(carro) {
        $scope.entidade.idCarro = carro.idCarro;
        $scope.entidade.nomeCarro = carro.nomeCarro;
        $scope.entidade.cor = carro.cor;
        $scope.entidade.dataLancamento = carro.dataLancamento;

    }

    function excluirCarro(carro) {
        for (var i in $scope.listaCarros) {
            if ($scope.listaCarros[i] == carro) {
                $scope.listaCarros.splice(i, 1);
                AlertService.info('Registro excluído com sucesso!');
            }
        }
    }

    function limpar() {
        $scope.entidade = {};
        $scope.carroForm.$setUntouched();
        angular.element('#nomeCarro').focus();
    }
}