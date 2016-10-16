/**
 * Created by antoine on 2016-08-01.
 */
'use strict';
angular.module('Husser').config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise('/');

		$stateProvider.
		state('main', {
			url: '/',
			templateUrl: '/webapp/views/main.view.html'
		});
	}
]);
