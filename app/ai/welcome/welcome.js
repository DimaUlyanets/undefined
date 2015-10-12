(function () {
    'use strict';
    angular
        .module('app.ai')
        .controller('Welcome', Welcome);

    Welcome.$inject = [
    ];

    /* @ngInject */
    function Welcome() {
        /* jshint validthis: true */
        var vm = this;
        vm.guest = {};
      console.log(vm.guest)
    }
})();