/**
 * Created by antoine on 2016-08-01.
 */
'use strict';
angular.module('Husser').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider.
		state('main', {
			url: '/',
			templateUrl: '/app/views/main.view.html'
		});
	}
]);
