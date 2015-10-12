(function () {
    'use strict';
    angular
        .module('app.startup')
        .controller('Startup', Startup);

    Startup.$inject = [
        '$state'
    ];

    /* @ngInject */
    function Startup($state) {
        /* jshint validthis: true */
        var vm = this;

        activate();

        function activate(){

        }
    }
})();