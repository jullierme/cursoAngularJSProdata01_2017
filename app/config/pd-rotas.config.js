angular.module('pdCurso')
    .config(config);

function config($stateProvider) {
    const cadastroCarro = {
        name:'cadastroCarro',
        url:'/cadastro-carro',
        templateUrl:'app/views/carro/cadastro-carro.html',
        resolve:{
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load('app/views/carro/cadastro-carro-controller.js')
            }
        }
    };

    const pesquisaCarro = {
        name:'pesquisaCarro',
        url:'/pesquisa-carro',
        templateUrl:'app/views/carro/pesquisa-carro.html',
        resolve:{
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load('app/views/carro/pesquisa-carro-controller.js')
            }
        }
    };

    $stateProvider
        .state('cadastroCarro',cadastroCarro)
        .state('pesquisaCarro',pesquisaCarro)
}