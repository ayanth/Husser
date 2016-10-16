'use strict';

/**
 * Module dependencies.
 */
var configsBase = require('./base');
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var compress = require('compression');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var helmet = require('helmet');
var consolidate = require('consolidate');
var path = require('path');
var fs = require('fs-extra');


/**
 * Initialize local variables
 */
module.exports.initLocalVariables = function (app) {
	// Passing the request url to environment locals
	app.use(function (req, res, next) {
		res.locals.host = req.protocol + '://' + req.hostname;
		res.locals.url = req.protocol + '://' + req.headers.host + req.originalUrl;
		next();
	});
};

/**
 * Initialize application middleware
 */
module.exports.initMiddleware = function (app) {
	// Showing stack errors
	app.set('showStackError', true);

	// Enable jsonp
	app.enable('jsonp callback');

	// Should be placed before express.static
	app.use(compress({
		filter: function (req, res) {
			return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
		},
		level: 9
	}));

	// Initialize favicon middleware
	app.use(favicon('./favicon.ico'));

		// Enable logger (morgan)
		app.use(morgan('dev'));

		// Disable views cache
		app.set('view cache', false);

	// Request body parsing middleware should be above methodOverride
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(methodOverride());

	// Add the cookie parser and flash middleware
	app.use(cookieParser());

};

/**
 * Configure view engine
 */
module.exports.initViewEngine = function (app) {
	app.engine('server.view.html', consolidate.swig);

	// Set views path and view engine
	app.set('view engine', 'server.view.html');
	app.set('views', path.join(__dirname, '../../', 'webapp/'));
};

/**
 * Configure Helmet headers configuration
 */
module.exports.initHelmetHeaders = function (app) {
	// Use helmet to secure Express headers
	app.use(helmet.frameguard());
	app.use(helmet.xssFilter());
	app.use(helmet.noSniff());
	app.use(helmet.ieNoOpen());
	app.disable('x-powered-by');
};

module.exports.initRoutes = function(app, cb) {
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
};

module.exports.initClientRoutes = function (app) {
	console.log(path.resolve('./'));
	app.use(express.static(path.resolve('./')));
	// app.use('/static', express.static(path.resolve('../node_modules')));
};

module.exports.init = function (cb) {
	var app = require('express.io')();
	app.http().io();

	app.use(bodyParser.json({limit: '50mb'}));
	app.use(bodyParser.urlencoded({limit: '500mb', extended: true}));

	this.initLocalVariables(app);

	this.initMiddleware(app);

	this.initViewEngine(app);

	this.initHelmetHeaders(app);

	this.initClientRoutes(app);

	this.initRoutes(app, function(err) {
		try{
			app.listen(configsBase.port);
			cb();
		}catch (err) {
			cb(err);
		}
	});
};
