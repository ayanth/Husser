/**
 * Created by Antoine on 2016-10-02.
 */
var _ = require("lodash");
_.mixin(require("lodash-inflection"));
var path = require('path');
var dbPath = path.resolve('husser.db');

var connection = {
	client: 'sqlite3',
	connection: {
		filename: dbPath
	},
	useNullAsDefault: true
};

var knex = require('knex')(connection);

module.exports = {
	connection: connection,
	init: function(cb) {
		knex.raw('select 1+1 as result')
			.then(function(results){
				cb();
			})
			.catch(function(err) {
				console.error(err);
				cb(err);
			});
	},
	knex: knex
};