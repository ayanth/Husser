/**
 * Created by Antoine on 2016-10-01.
 */

module.exports = function(app) {
	var controller = require('../controllers/tabs.server.controller.js');

	app.io.route('tabs', {
		create: function(req) {
			controller.create(req, app)
		},
		remove: function(req) {
			controller.remove(req, app)
		}
	})
};
