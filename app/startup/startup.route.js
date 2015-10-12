(function () {
    'use strict';

    angular
        .module('app.startup')
        .config(appConfig);

    appConfig.inject = ['$stateProvider'];

    /* @ngInject */
    function appConfig($stateProvider) {
        $stateProvider
            .state('startup', {
                abstract:true,
                template:'<ui-view></ui-view>'
            })
            .state('startup.start', {
                resolve:{
                    steps: function(StartupService){
                        return StartupService.getSteps();
                    }
                },
                controller: function($state, steps){
                    var state = steps[0].state;
                    $state.go('startup.start.' + state);
                },
                template:'<ui-view></ui-view>'
            })
            .state('startup.start.meet', {
                url:'/meet',
                templateUrl: 'app/startup/meet.html',
                controller: 'Startup',
                controllerAs: 'vm'
            })
            .state('startup.start.naming', {
                url:'/naming',
                templateUrl: 'app/startup/naming.html',
                controller: 'Startup',
                controllerAs: 'vm'
            })
            .state('startup.start.basics', {
                url:'/basics',
                templateUrl: 'app/startup/meet.html',
                controller: 'Startup',
                controllerAs: 'vm'
            });
    }
})();