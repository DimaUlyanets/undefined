(function () {
    'use strict';
    angular.module('app', [
        'ui.router',
        'ngMockE2E',
        'app.config',
        'app.landing',
        'app.startup',
        'app.project'
    ])

        .config(['$stateProvider','$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");

        }])
    .run(function ($httpBackend){
            $httpBackend.whenGET(/\.html$/).passThrough();
            $httpBackend.whenGET(/\.json$/).passThrough();
        }
    );
})();