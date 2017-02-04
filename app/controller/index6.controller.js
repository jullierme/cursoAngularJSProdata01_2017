(function () {
    'use strict';

    angular.module('pdCurso')
        .controller('Index6Controller',Index6Controller);

    function Index6Controller($scope) {
        var vm = this;
        vm.dipararEvento = dipararEvento;

        iniciar();

        function iniciar() {
            $scope.$on('onTesteEvent', onTesteEvent);
        }

        function onTesteEvent(event, data) {
            //event.preventDefault();

            console.log(data);
        }

        function dipararEvento() {
            $scope.$emit('onTesteEvent', 'teste');
        }

    }

})();