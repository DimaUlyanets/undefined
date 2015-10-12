(function () {
    'use strict';

    angular
        .module('app.project')
        .config(appConfig);

    appConfig.inject = ['$stateProvider'];

    /* @ngInject */
    function appConfig($stateProvider) {
        $stateProvider
            .state('project', {
                url:'/project/:project_id',
                templateUrl: 'app/project/index.html',
                controller: 'Project',
                controllerAs: 'vm'
            });
    }
})();