/**
 * Created by Antoine on 2016-10-01.
 */
var knex = require('../libs/knex');
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

