/**
 * Created by Antoine on 2016-10-01.
 */
angular.module('Husser').factory('Tabs', ['Socket',
	function(Socket) {
		return {
			add: function(item, cb) {
				Socket.emit('tabs:add', item, cb);
			},
			remove: function(item, cb) {
				Socket.emit('tabs:remove', item, cb);
			},
			added: function(cb) {
				Socket.on('tabs:added', function(tab) {
					cb(tab);
				})
			}
		}
	}
]);