angular.module('pdCurso')
    .controller('Index8Controller',Index8Controller);

function Index8Controller($scope, $state) {

    $scope.alterarRota = alterarRota;

    function alterarRota(state) {
        $state.go(state);
    }
}