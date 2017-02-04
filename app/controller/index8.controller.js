(function () {
    'use strict';

    angular.module('pdCurso')
        .controller('Index8Controller', Index8Controller);

    function Index8Controller($state) {
        var vm = this;
        vm.alterarRota = alterarRota;

        function alterarRota(state) {
            $state.go(state);
        }


    }

})();