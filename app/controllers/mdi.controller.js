/**
 * Created by Antoine on 2016-10-01.
 */
angular.module('Husser').controller('MdiController', ['$scope', 'Socket', 'Tabs',
	function($scope, Socket, Tabs) {
		$scope.tabs = [{
			src: 'http://youtube.com',
			isWebBrowser: true
		}];
		Socket.on('main:connected', function(res) {
			console.log(res);
		});

		$scope.selectTab = function(index) {
			for(var i = 0; i < $scope.tabs.length; i++){
				$scope.tabs[i].visible = false;
			}
			$scope.tabs[index].visible = true;
		};

		// $scope.removeAtZero = function(){
		// 	console.log('do exit in mdi controller');
		// 	$scope.tabs.splice(0,1);
		// };
		Tabs.added(function(newTab) {
			console.log($scope.tabs);
			$scope.tabs.push(newTab);
		});
		Socket.emit('main:connect');
	}
]);