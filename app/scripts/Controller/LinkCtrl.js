'use strict';

/**
 * @ngdoc function
 * @description
 * # MainCtrl
 */

//
angular.module('MMADApp')
    .controller('LinkCtrl',['$rootScope','$scope','$http','$location','ApiServiceOp','$state', function ($rootScope,$scope,$http,$location,ApiServiceOp,$state) {

        
			ApiServiceOp.getLinks()
			.success(function(response){
			
		
				$scope.link_details = response;
				
			console.log($scope.link_details);
			}).error(function(){
				console.log("wrong");
			//swal("Oops!", "RElogin", "error");
			});
			  
    }]);



