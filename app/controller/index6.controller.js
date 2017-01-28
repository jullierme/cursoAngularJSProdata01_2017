angular.module('pdCurso')
    .controller('Index6Controller',Index6Controller);

function Index6Controller($scope, $rootScope) {
    $scope.dipararEvento = dipararEvento;

    $scope.$on('onTesteEvent', onTesteEvent);

    function onTesteEvent(event, data) {
        //event.preventDefault();

        console.log(data);
    }

    function dipararEvento() {
        $scope.$emit('onTesteEvent', 'teste');
    }

}