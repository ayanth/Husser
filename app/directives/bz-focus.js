/**
 * Created by antoine on 2016-08-04.
 */
angular.module('bz.tools').directive('bzFocus', ['$timeout', '$parse',
	function ($timeout, $parse) {
		return {
			//scope: true,   // optionally create a child scope
			link: function (scope, element, attrs) {
				var model = $parse(attrs.bzFocus);
				scope.$watch(model, function (value) {
					if (value === true) {
						$timeout(function () {
							element[0].focus();
						});
					}
				});

				element.bind('blur', function () {
					scope.$apply(model.assign(scope, false));
				});
			}
		};
	}
]);