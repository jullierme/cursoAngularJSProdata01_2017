(function () {
    'use strict';

    angular.module('pdCurso')
        .controller('CadastroCarroController',CadastroCarroController);

    function CadastroCarroController(CarroService) {
        var vm = this;
        vm.pdService = CarroService.getPdService();

        vm.nome = 'Cadastro de carro';
    }

})();