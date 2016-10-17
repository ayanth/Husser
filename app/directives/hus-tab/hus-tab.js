/**
 * Created by Antoine on 2016-10-02.
 */
angular.module('Husser').directive('husTab', [
	function() {
		return {
			replace: true,
			restrict: 'E',
			templateUrl: '/app/directives/hus-tab/hus-tab.html',
			scope: {
				tab: '=husTab'
			},
			link: function($scope, elem, attrs) {
				var webview = document.createElement('webview');
				webview.src = angular.copy($scope.tab.src);
				webview.style = "width:100%; height:100%;display: inline-block";
				elem[0].appendChild(webview);

				$scope.go = function (where) {
					webview.go(where);
				};
				$scope.navigate = function(where) {
					webview.src = where;
				};
			}

		};
	}
]);