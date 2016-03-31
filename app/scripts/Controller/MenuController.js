'use strict';


angular.module('MMADApp')
    .controller('menuController',['$scope','$http','$location', function ($scope,$http,$location) {

        $scope.isActive = function (viewLocation) {

           if(viewLocation === $location.path()) {
               return true;
           }
           // console.log("Location " + $location.path() + "\n") ;
           // console.log("View location " + viewLocation + "\n");


            //console.log(active)
            //return check;
        };



    }]);
