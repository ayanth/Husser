/**
 * Created by Antoine on 2016-10-01.
 */
const Tab = require('../models/tabs.model');
exports.add = function(req, app) {
	let tab = new Tab();
	let newTab = req.data;
	tab.save();
	app.io.emit('tabs:added', newTab)
};

exports.remove = function(req, app) {

};