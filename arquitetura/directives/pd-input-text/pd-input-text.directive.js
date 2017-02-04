(function () {
    'use strict';

    angular.module('pdCurso')
        .directive('pdInputText', pdInputText);

    function pdInputText() {
return {
    restrict:'E',
    require:'^form',
    templateUrl:'arquitetura/directives/pd-input-text/pd-input-text.html',
    scope:{
        label:'@',
        ngModel:'=',
        ngRequired:'=',
        colspan:'@'
    },
    link: link
};

function link($scope, element, attrs, formCtrl) {
    $scope.formCtrl = formCtrl;

    $scope.classColspan = 'col-md-' + ($scope.colspan || 3);

    $scope.inputName = 'pdInputText' + $scope.$id;

}
    }
})();