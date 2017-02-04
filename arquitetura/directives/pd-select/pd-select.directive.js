(function () {
    'use strict';

    angular.module('pdCurso')
        .directive('pdSelect', pdSelect);

    function pdSelect() {
        return {
            restrict: 'E',
            require: '^form',
            templateUrl: 'arquitetura/directives/pd-select/pd-select.html',
            scope: {
                label: '@',
                ngModel: '=',
                ngRequired: '=',
                colspan: '@',
                provider: '=',
                propriedadeValor:'@',
                propriedadeDescricao:'@'
            },
            link: link
        };

        function link($scope, element, attrs, formCtrl) {
            $scope.formCtrl = formCtrl;

            $scope.propriedadeValor = $scope.propriedadeValor || 'valor';
            $scope.propriedadeDescricao = $scope.propriedadeDescricao || 'descricao';

            $scope.classColspan = 'col-md-' + ($scope.colspan || 3);

            $scope.inputName = 'pdSelect' + $scope.$id;

        }
    }
})();