/**
 * Created by Antoine on 2016-10-01.
 */
(function() {
	var configs = require('../expressio/configs');
	var app = require('express.io')();
	var fs = require('fs-extra');
	var path = require('path');
	app.http().io();

	function initRoutes(cb) {
		fs.walk('./expressio/routes')
			.on('data', function (route) {
				if(route.path.indexOf('.js') != -1) {
					require(route.path)(app);
				}
			})
			.on('end', function () {
				cb()
			})
			.on('error', function(err) {
				cb(err);
			});
	}
	function initDatabase(cb) {
		configs.db.init(cb);
	}
	function initExpressIo(cb) {
		try{
			app.listen(configs.base.port);
			cb();
		}catch (err) {
			cb(err);
		}
	}
	initRoutes(function(err){
		if(err){return console.error(err);}
		initDatabase(function(err) {
			if(err){return console.error(err);}
			initExpressIo(function(err) {
				if(err){return console.error(err);}
			})
		});
	});
})();