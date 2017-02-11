(function () {
    'use strict';

    angular.module('pdCurso')
        .controller('Index14Login', Index14Login);

    function Index14Login(PdAlertService, PdStorageService, $window) {
        var vm = this;

        vm.view = 'login';

        vm.entidade = {};

        vm.logar = logar;
        vm.irParaRegistroDeUsuario = irParaRegistroDeUsuario;
        vm.irParaLogin = irParaLogin;
        vm.salvar = salvar;

        iniciar();

        function iniciar() {
            var isSuporta = PdStorageService.isNavegadorSuportaStorage();

            if(!isSuporta){
                PdAlertService.showError('Seu navegador não ' +
                    'suporta nossa tecnologia');
                return;
            }

            var usuarioLogado = PdStorageService.get('usuarioLogado');

            if(usuarioLogado){
                $window.location.href = 'index14-logado.html';
            }
        }

        function logar() {
            var listaDeUsuarios = PdStorageService.get('listaDeUsuarios');

            if(!listaDeUsuarios){
                PdAlertService.showError('Dados de acesso inválidos');
                return;
            }

            if(!vm.entidade.login || !vm.entidade.senha){
                PdAlertService.showError('Informe os dados de acesso');
                return;
            }

            var usuarioLogado;

            angular.forEach(listaDeUsuarios, function (usuario) {
                if(usuario.login === vm.entidade.login &&
                    usuario.senha === vm.entidade.senha){

                    usuarioLogado = usuario;
                    return false;
                }
            });

            if(!usuarioLogado){
                PdAlertService.showError('Dados de acesso inválidos');
                return;
            }

            PdStorageService.set('usuarioLogado', usuarioLogado);

            $window.location.href = 'index14-logado.html';
        }

        function salvar() {
            if(!vm.entidade.nome || !vm.entidade.login || !vm.entidade.senha){
                PdAlertService.showError('Informe os dados do novo usuário');
                return;
            }

            var listaDeUsuarios = PdStorageService.get('listaDeUsuarios') || [];

            for(var x = 0, y = listaDeUsuarios.length; x < y; x ++){
                if(listaDeUsuarios[x].login === vm.entidade.login){
                    PdAlertService.showError('Usuário já cadastrado');
                    return;
                }
            }

            listaDeUsuarios.push(vm.entidade);
            PdStorageService.set('listaDeUsuarios', listaDeUsuarios);

            limpar();

            irParaLogin();
        }

        function irParaRegistroDeUsuario() {
            vm.view = 'registrar';
        }

        function irParaLogin() {
            vm.view = 'login';
        }

        function limpar() {
            vm.entidade = {};
        }
    }

})();