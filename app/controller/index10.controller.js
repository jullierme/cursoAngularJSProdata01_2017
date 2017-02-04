(function () {
    'use strict';

    angular.module('pdCurso')
        .controller('Index10Controller', Index10Controller);

    function Index10Controller() {
        var vm = this;
        vm.entidade = {};
        vm.sexo = [
            {valor: 'M', descricao: 'Masculino'},
            {valor: 'F', descricao: 'Feminino'}
        ];

        iniciar();

        function iniciar() {
            vm.entidade.sexo = 'M';
        }
    }

})();