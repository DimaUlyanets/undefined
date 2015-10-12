(function () {
    'use strict';

    angular
        .module('app.feedback')
        .config(appConfig);

    appConfig.inject = ['$stateProvider'];

    /* @ngInject */
    function appConfig($stateProvider) {
        $stateProvider
            .state('project.feedback', {
                url:'/feedback',
                templateUrl: 'app/project/feedback/index.html',
                controller: 'Feedback',
                controllerAs: 'vm'
            });
    }
})();