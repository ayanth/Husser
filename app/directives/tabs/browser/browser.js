/**
 * Created by Antoine on 2016-10-02.
 */
angular.module('Husser').directive('webBrowser', [
	function() {
		return {
			replace: true,
			restrict: 'E',
			templateUrl: '/app/directives/tabs/browser/browser.html',
			scope: {
				tab: '=husTab',
				exit: '&husExit'
			},
			link: function($scope, elem, attrs) {
				var webview = document.createElement('webview');
				webview.src = angular.copy($scope.tab.src);
				webview.style = "width:99vw; height:95vh;display: inline-block";
				elem[0].appendChild(webview);

				$scope.go = function (where) {
					webview.go(where);
				};
				$scope.navigate = function(where) {
					webview.src = where;
				};
				$scope.onExit = function() {
					console.log('exit in directive');
				}
			}

		};
	}
]);