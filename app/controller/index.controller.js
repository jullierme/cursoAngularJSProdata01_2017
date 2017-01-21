angular.module('pdCurso')
    .controller('IndexController', IndexController);

function IndexController($scope, PdAlertService, $filter) {
    $scope.entidade = {};
    $scope.listaDePessoas = [];

    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.editar = editar;
    $scope.excluir = excluir;
    $scope.excluirPessoa = excluirPessoa;

    function salvar() {
        if ($scope.formPessoa.$invalid) {
            
            angular.forEach($scope.formPessoa.$error, function (errorField) {
                for(var i = 0; i < errorField.length; i ++){
                    errorField[i].$setTouched();
                }
            });


            PdAlertService.showError('Verifique os campos inválidos');
            return;
        }

        var dataFormatada = $filter('date')($scope.entidade.nascimento, 'dd/MM/yyyy');

        PdAlertService.showSuccess(dataFormatada);

        var entidadeAux = $scope.entidade;

        excluirPessoa($scope.entidade);

        $scope.listaDePessoas.push(entidadeAux);
        limpar();

        PdAlertService.showSuccess('Registro salvo com sucesso!');
    }

    function limpar() {
        $scope.entidade = {};

        angular.element('#itNome').focus();

        $scope.formPessoa.$setUntouched();
    }

    function editar(pessoa) {
        $scope.entidade = pessoa;
    }

    function excluir(index) {
        $scope.listaDePessoas.splice(index, 1);

        PdAlertService.showSuccess('Registro excluido com sucesso!', 'Ok');

        limpar();
    }

    function excluirPessoa(pessoa) {
        var index = $scope.listaDePessoas.indexOf(pessoa);

        if (index >= 0) {
            excluir(index);
        }
    }
}