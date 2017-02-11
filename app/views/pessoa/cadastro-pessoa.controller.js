(function () {
    'use strict';

    angular.module('pdCurso')
        .controller('CadastroPessoaController', CadastroPessoaController);

    function CadastroPessoaController(PessoaService, CarroService) {
        var vm = this;
        vm.pdService = PessoaService.getPdService();
        vm.pdPaiService = PessoaService.getPdService();
        vm.pdMaeService = PessoaService.getPdService();

        vm.pdCarroService = CarroService.getPdService();

    }
})();