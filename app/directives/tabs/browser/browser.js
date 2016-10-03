/**
 * Created by Antoine on 2016-10-02.
 */
angular.module('Husser').directive('webBrowser', [
	function() {
		return {
			replace: true,
			restrict: 'E',
			templateUrl: '/app/directives/tabs/browser/browser.html'
		};
	}
]);