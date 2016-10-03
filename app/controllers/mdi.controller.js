/**
 * Created by Antoine on 2016-10-01.
 */
angular.module('Husser').controller('MdiController', ['$scope', 'Socket', 'Tabs',
    function($scope, Socket, Tabs) {
        Socket.on('main:connected', function(res) {
            console.log(res);
        });
        Socket.emit('main:connect');
    }
]);