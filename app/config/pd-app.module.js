angular.module('pdCurso',[
    'ngMessages',
    'ngAnimate',
    'toastr',
    'ui.grid',
    'ui.grid.selection',
    'ngMaterial',
    'ui.router',
    'oc.lazyLoad'
]);

angular.module('pdCurso')
    .config(config);

function config($mdThemingProvider, $compileProvider) {
    $mdThemingProvider.theme('blue')
        .primaryPalette('blue')
        .accentPalette('pink');

    $mdThemingProvider.theme('green')
        .primaryPalette('green')
        .accentPalette('pink');

    //correção incompatibilidades angularjs 1.6
    $compileProvider.preAssignBindingsEnabled(true);
}