(function () {
    'use strict';

    angular.module('pdCurso')
        .controller('IndexController',IndexController);

    IndexController.$inject = ['$scope'];

    function IndexController($scope) {
        var vm = this;

        vm.cssDaDiv = {};
        vm.classeCss = '';

        iniciar();

        function iniciar() {
            $scope.$watch('vm.cor', onWatchCor);

            vm.cssDaDiv.width = '150px';
            vm.cssDaDiv.height = '150px';
        }

        function onWatchCor(newValue, oldValue) {
            if(newValue === oldValue){
                return;
            }

            vm.cssDaDiv.backgroundColor = newValue;

            if(newValue.toString() === '1'){
                vm.classeCss = 'div1';
            } else if(newValue.toString() === '2'){
                vm.classeCss = 'div2 div3';
            }
        }
    }

})();