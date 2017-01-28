angular.module('pdCurso')
    .controller('IndexController', IndexController);

IndexController.$inject = ['$scope', 'PdAlertService', '$filter'];

function IndexController($scope, PdAlertService, $filter) {
    $scope.entidade = {};
    $scope.listaDePessoas = [];

    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.editar = editar;
    $scope.excluir = excluir;
    $scope.excluirPessoa = excluirPessoa;
    $scope.getStyleDaLinha = getStyleDaLinha;

    $scope.gridOptions = {
        data: 'listaDePessoas',
        enableColumnMenus: false,
        enableRowSelection:true,
        rowTemplate:'app/templates/row-template.html',
        columnDefs: [
            {name: 'Nome', field: 'nome'},
            {name: 'Sobrenome', field: 'sobrenome', width: 150},
            {name: 'Sexo', field: 'sexo', width: 150},
            {
                name: 'Data de nascimento',
                field: 'nascimento',
                width: 190,
                cellTemplate: 'app/templates/cell-template-date.html'
            },
            {
                name: '', field: 'excluir', width: 40,
                cellTemplate: 'app/templates/cell-template-excluir.html',
                onClick:excluir
            }
        ]
    };

    function getStyleDaLinha(linhaSelecionada) {
        var style = {};

        if(linhaSelecionada.cor){
            style.backgroundColor = linhaSelecionada.cor;
        }

        return style;
    }

    function salvar() {
        if ($scope.formPessoa.$invalid) {

            angular.forEach($scope.formPessoa.$error, function (errorField) {
                for (var i = 0; i < errorField.length; i++) {
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