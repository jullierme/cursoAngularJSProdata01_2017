angular.module('pdCurso')
    .controller('IndexController',IndexController);

function IndexController($scope) {

    $scope.$watch('cor', onWatchCor);

    $scope.cssDaDiv = {};
    $scope.cssDaDiv.width = '150px';
    $scope.cssDaDiv.height = '150px';

    $scope.classeCss = '';

    function onWatchCor(newValue, oldValue) {
        if(newValue === oldValue){
            return;
        }

        $scope.cssDaDiv.backgroundColor = newValue;

        if(newValue.toString() === '1'){
            $scope.classeCss = 'div1';
        } else if(newValue.toString() === '2'){
            $scope.classeCss = 'div2 div3';
        }
    }
}