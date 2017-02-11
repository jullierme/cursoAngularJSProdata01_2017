(function () {
    'use strict';

    angular.module('pdCurso')
        .directive('pdPanel', pdPanel);

    function pdPanel() {
        return {
            restrict: 'E',
            templateUrl:'arquitetura/directives/pd-panel/pd-panel.html',
            scope:{
                titulo: '@',
                tipo:'@',
                classIcone:'@'
            },
            transclude:true,
            link: link
        };

        function link(scope) {
            scope.classTipo = 'panel-' +
                (scope.tipo || 'default');

            scope.classIcone = scope.classIcone || 'fa fa-cog';
        }
    }
})();