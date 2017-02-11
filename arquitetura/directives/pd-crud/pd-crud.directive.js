(function () {
    'use strict';

    angular.module('pdCurso')
        .directive('pdCrud', pdCrud);

    function pdCrud($log) {
        return {
            restrict: 'E',
            scope: {
                titulo: '@',
                classIcone: '@',
                salvar:'&',
                excluir:'&',
                limpar:'&'
            },
            transclude: {
                'header': '?pdCrudHeader',
                'body': 'pdCrudBody',
                'footer': '?pdCrudFooter'
            },
            templateUrl:'arquitetura/directives/pd-crud/pd-crud.html',
            link: link
        };
        function link(scope) {
            iniciar();
            function iniciar() {
                verificarParametrosNaoInformado();
                definirValoresDefault();
            }
            function verificarParametrosNaoInformado() {
                if(!scope.titulo){
                    $log.error('Atenção: Não foi informado o título do crud');
                }
            }
            function definirValoresDefault() {
                scope.formName = 'pdForm'+scope.$id;
                scope.classIcone = scope.classIcone || 'fa fa-edit';
            }
        }
    }
})();