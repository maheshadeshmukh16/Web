'use strict';

/**
 * @ngdoc function
 * @description
 * # MainCtrl
 */

//
angular.module('MMADApp')
    .controller('GalleryCtrl',['$rootScope','$scope','$http','$location','ApiServiceOp','$state', function ($rootScope,$scope,$http,$location,ApiServiceOp,$state) {

        
            ApiServiceOp.getGalleryImages()
			
			.success(function (response) {

                    $scope.gallary_images = response;
                    console.log($scope.gallary_images);
                }).
                error(function () {
                    console.log("wrong");
                    //swal("Oops!", "RElogin", "error");
                });
              
    }]);



