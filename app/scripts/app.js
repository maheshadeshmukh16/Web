'use strict';

/**
 * @ngdoc overview
 * @description
 * Main module of the application.
 */
var myApp=angular.module('MMADApp', [
    //'ngAnimate',
    //'ngCookies',
    //'ngResource',
    //'ngRoute',
    //'ngSanitize',
    //'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'ApiService',

]);


myApp.config(function($stateProvider, $urlRouterProvider,$httpProvider) {


    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('homepage', {
            url: '/home',
            views: {
                '': {
                    templateUrl: 'views/web_frontend.html'
                },
               'frontend_content@homepage': {
                   templateUrl: 'views/home.html',
                   // controller: 'MainCtrl'                },
                  },
            }
        })
		
		.state('homepage.commitee',{
		  url: '/commitee',
		  views: {
		  	'frontend_content@homepage': {
				templateUrl: 'views/commitee.html',
				//controller: ''
			}
		  }
		})
		
		.state('homepage.events',{
		  url: '/events',
		  views: {
		  	'frontend_content@homepage': {
				templateUrl: 'views/events.html',
				controller: 'EventCtrl'
			}
		  }
		})
		
		.state('homepage.gallery',{
		  url: '/gallery',
		  views: {
		  	'frontend_content@homepage': {
				templateUrl: 'views/gallery.html',
				controller: 'GalleryCtrl'
			}
		  }
		})
		
		.state('homepage.sponsers',{
		  url: '/sponsers',
		  views: {
		  	'frontend_content@homepage': {
				templateUrl: 'views/sponsers.html',
				//controller: ''
			}
		  }
		})
		
		.state('homepage.publications',{
		  url: '/publications',
		  views: {
		  	'frontend_content@homepage': {
				templateUrl: 'views/publications.html',
				//controller: ''
			}
		  }
		})
		
		.state('homepage.useful links',{
		  url: '/useful links',
		  views: {
		  	'frontend_content@homepage': {
				templateUrl: 'views/useful links.html',
				controller: 'LinkCtrl'
			}
		  }
		})
		
		.state('homepage.blogs',{
		  url: '/blogs',
		  views: {
		  	'frontend_content@homepage': {
				templateUrl: 'views/blogs.html',
				//controller: ''
			}
		  }
		})
		
		.state('homepage.contact us',{
		  url: '/contact us',
		  views: {
		  	'frontend_content@homepage': {
				templateUrl: 'views/contact us.html',
				//controller: ''
			}
		  }
		})
});

