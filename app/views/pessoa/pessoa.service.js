(function () {
    'use strict';

    angular.module('pdCurso')
        .service('PessoaService', PessoaService);

    function PessoaService(PdService) {
        this.getPdService = getPdService;

        function getPdService() {
            var ps = new PdService('pessoaController');
            //ps.viewPesquisa = 'pessoa';
            //ps.viewCadastro = 'caminho da tela de cadastro';
            //ps.metodoPesquisar = 'pesquisarPessoas';
            return ps;
        }
    }
})();