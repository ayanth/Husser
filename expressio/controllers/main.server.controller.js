/**
 * Created by Antoine on 2016-10-01.
 */
const path = require('path');
const configs = require('../configs');
exports.connect = function(req, app) {
		return req.socket.emit('main:connected', []);
};

exports.renderIndex = function(req, res) {
	let husser = {
		expressio: {
			configs: configs.base
		}
	};

	res.render('index', {husser: husser});
};

