angular.module('pdApp').controller('CadastroCarroController', CadastroCarroController);

function CadastroCarroController($scope, AlertService, $filter) {
    $scope.entidade = {};
    $scope.listaCarros = [];
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluirCarro = excluirCarro;

    function salvar() {
        $scope.carroForm.nomeCarro.$setTouched();
        $scope.carroForm.cor.$setTouched();
        if ($scope.carroForm.$invalid) {
            AlertService.error('Formulário inválido', 'Atenção');
            return false;
        }
        $scope.entidade.idCarro = new Date().getTime();

        $scope.entidade.nomeCarro = $filter('maiusculo') ($scope.entidade.nomeCarro);
        $scope.listaCarros.push($scope.entidade);
        AlertService.success('Registro salvo com sucesso!');
        limpar();
    }

    function carregarCarro(carro) {
        debugger;
        angular.element('#nomeCarro').val(carro.nomeCarro);
        angular.element('#cor').val(carro.cor);
        angular.element('#dataLancamento').val(carro.dataLancamento);
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