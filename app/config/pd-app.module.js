(function () {
    'use strict';

    angular.module('pdCurso',[
        'ngMessages',
        'ngAnimate',
        'toastr',
        'ui.grid',
        'ui.grid.selection',
        'ngMaterial',
        'ui.router',
        'oc.lazyLoad',
        'angular-loading-bar'
    ]);

    angular.module('pdCurso')
        .config(config);

    function config($mdThemingProvider, $compileProvider,
                    cfpLoadingBarProvider) {
        $mdThemingProvider.theme('blue')
            .primaryPalette('blue')
            .accentPalette('pink');

        $mdThemingProvider.theme('green')
            .primaryPalette('green')
            .accentPalette('pink');

        cfpLoadingBarProvider.includeSpinner = false;
    }

})();