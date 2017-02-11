(function () {
    'use strict';

    angular.module('pdCurso')
        .service('CarroService', CarroService);

    function CarroService(PdService) {
        this.getPdService = getPdService;

        function getPdService() {
            return new PdService('carroController');
        }
    }
})();