(function() {
    'use strict';

    angular
        .module('app.startup')
        .factory('StartupService', StartupService);

    StartupService.$inject = [
    ];

    function StartupService() {

        var StartupService = {
            getSteps: getSteps
        };


        function getSteps(){

            return [
                {
                    title:'Meet',
                    state: 'meet'
                },
                {
                    title:'Naming',
                    state: 'naming'
                },
                {
                    title:'Basics',
                    state: 'basics'
                }
            ]
        }

        return StartupService;


    }
})();