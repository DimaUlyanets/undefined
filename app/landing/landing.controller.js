(function () {
    'use strict';
    angular
        .module('app.landing')
        .controller('Landing', Landing);

    Landing.$inject = [
        '$state'
    ];

    /* @ngInject */
    function Landing($state) {
        /* jshint validthis: true */
        var vm = this;
        vm.createStartup = createStartup;



        function createStartup(){
            $state.go('startup.start');

        }
    }
})();