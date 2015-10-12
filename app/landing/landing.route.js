(function () {
    'use strict';

    angular
        .module('app.landing')
        .config(appConfig);

    appConfig.inject = ['$stateProvider'];

    /* @ngInject */
    function appConfig($stateProvider) {
        $stateProvider
            .state('landing', {
                url:'/',
                templateUrl: 'app/landing/index.html',
                controller: 'Landing',
                controllerAs: 'vm'
            });
    }
})();