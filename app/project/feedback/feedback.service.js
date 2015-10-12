(function() {
    'use strict';

    angular
        .module('app.feedback')
        .factory('FeedbackService', FeedbackService);

    FeedbackService.$inject = [
        '$http',
        'appConfig'
    ];

    function FeedbackService($http, appConfig) {

        var FeedbackService = {
            publish: publish
        };


        function publish(project_id){
            var data = {status: 'publish'};
            return $http.put(appConfig.apiUrl + 'project/' + project_id, data);
        }

        return FeedbackService;


    }
})();