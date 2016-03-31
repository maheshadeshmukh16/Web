'use strict';

/**
 * @ngdoc function
 * @description
 * # MainCtrl
 */

//
angular.module('MMADApp')
    .controller('DashboardCtrl',['$rootScope','$scope','$http','$location','ApiServiceOp','DataExchangeOp','$modal','$state', function ($rootScope,$scope,$http,$location,ApiServiceOp,DataExchangeOp,$modal,$state) {

        $scope.init = function() {

            ApiServiceOp.getEvents()
                .success(function (response) {

                    console.log(response);
                    $scope.event_details = response;
                    //console.log($scope.event_details);
                }).
            error(function () {
                console.log("wrong");
                //swal("Oops!", "RElogin", "error");
            });

            ApiServiceOp.getLinks()
                .success(function (response) {

                    $scope.link_details = response;
                    //console.log($scope.link_details);
                }).
            error(function () {
                console.log("wrong");
                //swal("Oops!", "RElogin", "error");
            });


            ApiServiceOp.getCommiteeMembers()
                .success(function (response) {

                    $scope.commitee_details = response;
                    console.log($scope.commitee_details);
                }).
            error(function () {
                console.log("wrong");
                //swal("Oops!", "RElogin", "error");
            });
        };

        $scope.addEvent = function() {

            var modalInstance = $modal.open({
                templateUrl: 'views/addEvent.html',
                controller: 'ModelInstanceCtrl',
                resolve: {
                    'mAddEvent': function () {
                        return false;
                    }
                }
            });
            modalInstance.result.then(function (response) {

                console.log(response);
                $scope.init();

            }, function () {

                console.log("here");
                $scope.init();
                //$location.path('login');
                //console.log('Modal dismissed at: ' + new Date());
            });

        };
        $scope.addLink = function() {

            var modalInstance = $modal.open({
                templateUrl: 'views/addLink.html',
                controller: 'ModelInstanceCtrl',
                resolve: {
                    'mAddLink': function () {
                        return false;
                    }
                }
            });
            modalInstance.result.then(function (response) {

                console.log(response);
                $scope.init();

            }, function () {

                console.log("here");
                $scope.init();
                //$location.path('login');
                //console.log('Modal dismissed at: ' + new Date());
            });

        };

        $scope.addImage = function(data) {


            $rootScope.myData = data;
            DataExchangeOp.setDetails(data);
            console.log( DataExchangeOp.getDetails());
            console.log( DataExchangeOp.getDetails());
            $state.go('dashboard.gallery');
            //$location.path('dashboard/gallery');
        };

        $scope.addCommitee = function() {

            var modalInstance = $modal.open({
                templateUrl: 'views/addCommitee.html',
                controller: 'ModelInstanceCtrl',
                resolve: {
                    'mAddCommitee': function () {
                        return false;
                    }
                }
            });
            modalInstance.result.then(function (response) {

                console.log(response);
                $scope.init();

            }, function () {

                console.log("here");
                $scope.init();
                //$location.path('login');
                //console.log('Modal dismissed at: ' + new Date());
            });
        };

        $scope.init();
    }]);



