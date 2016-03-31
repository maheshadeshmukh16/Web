
'use strict';

angular.module('MMADApp')
    .directive("navBarDirective",[function(){
        return{
            restrict: 'E',
            templateUrl: "views/navbar.html"
        };
    }]);