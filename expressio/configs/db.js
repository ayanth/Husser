/**
 * Created by Antoine on 2016-10-02.
 */
const _ = require("lodash");
_.mixin(require("lodash-inflection"));
const path = require('path');
const connect = require('camo').connect;

let uri = 'nedb://' + path.resolve('data');
let database;

module.exports = {
	init: function(cb) {
		connect(uri)
			.then(db => {
				database = db;
			})
	}
};