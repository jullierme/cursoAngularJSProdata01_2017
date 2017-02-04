(function () {
    'use strict';

    angular.module('pdCurso')
        .controller('Index9Controller', Index9Controller);

    /*
     * NUNCA FAÇA CHAMADAS HTTP DIRETAMENTE NO CONTROLLER
     * SEMPRE UTILIZE UM SERVICE
     * */
    function Index9Controller($http, PdAlertService, $q) {
        var vm = this;

        vm.listaDeDados = [];

        vm.isProcessando = false;

        vm.carregarListaDeDados = carregarListaDeDados;

        iniciar();

        function iniciar() {
            configurarGrid();
        }

        function configurarGrid() {
            vm.gridOptions = {
                data: 'vm.listaDeDados'
            };
        }

        function carregarListaDeDados() {
            vm.isProcessando = true;
            //deve ser implementado no service
            //$http.get('https://jsonplaceholder.typicode.com/photos')
            var promisse = executarProcessamentoAssincrono();

            promisse
                .then(carregarListaDeDadosResult, carregarListaDeDadosFault);
        }

        function carregarListaDeDadosResult(data) {
            if (data) {
                vm.listaDeDados = data;
            } else {
                vm.listaDeDados = [];
            }

            vm.isProcessando = false;
        }

        function carregarListaDeDadosFault(rejection) {
            vm.isProcessando = false;

            PdAlertService.showError('Erro ao consultar lista de dado:' +
                rejection.message);
        }

        function executarProcessamentoAssincrono() {
            var listaDeDados1 = null;
            var listaDeDados2 = null;
            var deferred = $q.defer();

            $http.get('https://jsonplaceholder.typicode.com/photos')
                .then(onResult1, onFault1);
            $http.get('https://jsonplaceholder.typicode.com/comments')
                .then(onResult2, onFault1);

            return deferred.promise;

            function onResult1(response) {
                listaDeDados1 = response.data;

                if(listaDeDados2) {
                    var array = listaDeDados1.concat(listaDeDados2);
                    deferred.resolve(array);
                }
            }
            function onResult2(response) {
                listaDeDados2 = response.data;

                if(listaDeDados1) {
                    var array = listaDeDados1.concat(listaDeDados2);
                    deferred.resolve(array);
                }
            }
            function onFault1() {
                deferred.reject('erro ao executar processamento');
            }
        }
    }

})();