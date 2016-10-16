/**
 * Created by Antoine on 2016-10-01.
 */
(function() {
	var configs = require('../expressio/configs');
	var fs = require('fs-extra');
	var path = require('path');
	var app;

	function initExpress(cb) {
		configs.express.init(function (err, _app) {
			if(err){return console.error(err);}
		})
	}
	function initDatabase(cb) {
		configs.db.init(cb);
	}
	initExpress(function(err){
		if(err){return console.error(err);}
		initDatabase(function(err) {
			if(err){return console.error(err);}
		});
	});
})();