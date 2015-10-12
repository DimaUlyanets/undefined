(function () {
    'use strict';

    angular
        .module('app.feedback')
        .controller('Feedback', Feedback);

    Feedback.$inject = ['$stateParams', 'FeedbackService'];

    /* @ngInject */
    function Feedback($stateParams, FeedbackService)
    {
        /* jshint validthis: true */
        var vm = this;
        vm.title = 'feedbackCtrl';
        vm.release = release;

        function release(){
            FeedbackService.publish($stateParams.project_id).then(function(res){
                console.log(res);
            });
        }
    }
})();