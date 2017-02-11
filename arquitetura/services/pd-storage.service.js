(function () {
    'use strict';

    angular.module('pdCurso')
        .service('PdStorageService', PdStorageService);

    PdStorageService.$inject = ['localStorageService'];

    function PdStorageService(localStorageService) {
        this.isNavegadorSuportaStorage = isNavegadorSuportaStorage;
        this.set = set;
        this.get = get;
        this.remover = remover;
        this.removerTodos = removerTodos;

        function isNavegadorSuportaStorage() {
            return localStorageService.isSupported;
        }

        function set(key, value) {
            localStorageService.set(key, value);
        }

        function get(key) {
            return localStorageService.get(key);
        }

        function remover(key) {
            localStorageService.remove(key);
        }

        function removerTodos() {
            localStorageService.clearAll();
        }
    }
})();