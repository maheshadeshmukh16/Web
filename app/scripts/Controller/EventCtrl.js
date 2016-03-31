'use strict';

/**
 * @ngdoc function
 * @description
 * # MainCtrl
 */

//
angular.module('MMADApp')
    .controller('EventCtrl',['$rootScope','$scope','$http','$location','ApiServiceOp','$state', function ($rootScope,$scope,$http,$location,ApiServiceOp,$state) {

        
			ApiServiceOp.getEvents().success(function(response){
			
				console.log(response);
				$scope.event_details = response;
			//console.log($scope.event_details);
			}).error(function(){
				console.log("wrong");
			//swal("Oops!", "RElogin", "error");
			});
			
		
        
    }]);



