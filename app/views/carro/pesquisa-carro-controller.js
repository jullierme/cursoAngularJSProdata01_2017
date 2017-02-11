(function () {
    'use strict';

    angular.module('pdCurso')
        .controller('PesquisaCarroController',PesquisaCarroController);

    function PesquisaCarroController(CarroService) {
        var vm = this;
        vm.pdService = CarroService.getPdService();
        vm.nome = '====> Pesquisa de carro';
    }

})();