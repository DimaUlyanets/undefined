(function () {
    'use strict';
    angular
        .module('app.ai')
        .config(appConfig);

    appConfig.$inject = ['$routeProvider'];

    /* @ngInject */
    function appConfig($routeProvider) {
        $routeProvider
            .when('/welcome', {
                templateUrl: '/app/ai/templates/welcome.html',
                controller: 'Welcome',
                controllerAs: 'vm'
            });
        }
})();
