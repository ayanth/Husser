/**
 * Created by Antoine on 2016-10-02.
 */
angular.module('Husser').factory('Socket', function ($rootScope) {
	var expressConfigs = require('../expressio/configs/base');
	var socket = io.connect('http://' + expressConfigs.ip + ':' + expressConfigs.port);

	return {
		on: function (eventName, callback) {
			socket.on(eventName, function () {
				var args = arguments;
				$rootScope.$apply(function () {
					callback.apply(socket, args);
				});
			});
		},
		emit: function (eventName, data, callback) {
			socket.emit(eventName, data, function () {
				var args = arguments;
				$rootScope.$apply(function () {
					if (callback) {
						callback.apply(socket, args);
					}
				});
			})
		}
	};
});