/**
 * Created by Antoine on 2016-10-01.
 */
angular.module('Husser').controller('MdiController', ['$scope', 'Socket', 'Tabs',
	function($scope, Socket, Tabs) {
		$scope.tab = {
			src: 'https://www.youtube.com/watch?v=PWgvGjAhvIw'
		};
		Socket.on('main:connected', function(res) {
			console.log(res);
		});
		$scope.doExit = function(){
			console.log('do exit in mdi controller');
		};
		Socket.emit('main:connect');
	}
]);