(function () {
    'use strict';

    angular.module('pdCurso')
        .controller('Index11CrudController', Index11CrudController);

    function Index11CrudController(PdAlertService, PdStorageService) {
        var vm = this;

        vm.entidade = {};

        vm.sexo = [
            {valor: 'M', descricao: 'Masculino'},
            {valor: 'F', descricao: 'Feminino'}
        ];

        vm.salvar = salvar;
        vm.excluir = excluir;
        vm.limpar = limpar;

        iniciar();

        function iniciar() {
            var isSuporta = PdStorageService.isNavegadorSuportaStorage();

            if(!isSuporta){
                PdAlertService.showError('Seu navegador não ' +
                    'suporta nossa tecnologia');
            }

            var entidade = PdStorageService.get('entidade');

            if(entidade){
                vm.entidade = entidade;
            }
        }

        function salvar() {
            PdAlertService.showSuccess('Registro salvo com sucesso!');
            PdStorageService.set('entidade', vm.entidade);
        }

        function excluir() {
            PdStorageService.remover('entidade');
            PdAlertService.showSuccess('Registro excluido com sucesso!');
            limpar();
        }

        function limpar() {
            vm.entidade = {};
        }
    }

})();