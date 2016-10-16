/**
 * Created by Antoine on 2016-10-01.
 */
var knex = require('../libs/knex');
var path = require('path');
var configs = require('../configs');
exports.connect = function(req, app) {
	knex.select().from('tabs')
		.then(function(tabs){
			return req.io.emit('main:connected', tabs);
		})
		.catch(function(err) {
			console.error(err);
			return req.io.emit('main:error', err);
		});
};

exports.renderIndex = function(req, res) {
	var husser = {
		expressio: {
			configs: configs.base
		}
	};

	res.render('index', {husser: husser});
};

