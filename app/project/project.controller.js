(function () {
    'use strict';

    angular
        .module('app.project')
        .controller('Project', Project);

    Project.$inject = [];

    /* @ngInject */
    function Project()
    {
        /* jshint validthis: true */
        var vm = this;
        vm.title = 'projectCtrl';

    }
})();