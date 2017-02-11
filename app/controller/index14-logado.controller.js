(function () {
    'use strict';

    angular.module('pdCurso')
        .controller('Index14Logado', Index14Logado);

    function Index14Logado(PdAlertService, PdStorageService, $window) {
        var vm = this;
        vm.sair = sair;

        iniciar();

        function iniciar() {
            vm.usuarioLogado = PdStorageService.get('usuarioLogado');

            if(!vm.usuarioLogado){
                $window.location.href = 'index14-login.html';
            }
        }

        function sair() {
            PdStorageService.remover('usuarioLogado');
            $window.location.href = 'index14-login.html';
        }
    }

})();