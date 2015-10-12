'use strict';

angular.module('app.device', [])
    .constant('device', (function(){
        var device;
        switch (true) {
            case (window.innerWidth > 1024):
                device = 'desktop';
                break;
            case (window.innerWidth > 768):
                device = 'tablet';
                break;
            case (window.innerWidth < 768):
                device = 'mobile';
                break;
        }
        return  device;

    })());