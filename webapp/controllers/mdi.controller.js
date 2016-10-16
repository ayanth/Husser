/**
 * Created by Antoine on 2016-10-01.
 */
angular.module('Husser').controller('MdiController', ['$scope', 'Socket', 'Tabs',
	function($scope, Socket, Tabs) {
		$scope.tabs = [{
			src: 'http://youtube.com'
		}];
		Socket.on('main:connected', function(res) {
			console.log(res);
		});
		$scope.removeAtZero = function(){
			console.log('do exit in mdi controller');
			$scope.tabs.splice(0,1);
		};
		$scope.addTab = function() {
			Tabs.add({
				src: 'http://youtube.com'
			});
		};
		Socket.emit('main:connect');
	}
]);