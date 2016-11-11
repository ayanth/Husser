/**
 * Created by Antoine on 2016-10-01.
 */
(function() {
	const configs = require('../expressio/configs');
	const fs = require('fs-extra');
	const path = require('path');
	let app;

	function initExpress(cb) {
		configs.express.init(function (err, _app) {
			if(err){return console.error(err);}
			app = _app;
			cb();
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