(function () {
    'use strict';

    angular
        .module('app.feedback', [])
        .run(['$httpBackend', '$http', '$stateParams', 'appConfig',
            function ($httpBackend, $http, $stateParams, appConfig) {
                var serviceBaseUrl = appConfig.apiUrl;
                var project_id = 5;
                $httpBackend.whenPUT(serviceBaseUrl + 'project/' + project_id).respond({status:'publish'});
        }]);
})();