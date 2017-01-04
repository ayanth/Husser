/**
 * Created by Antoine on 2016-10-01.
 */

module.exports = function(app) {
	let controller = require('../controllers/tabs.server.controller.js');

	app.io.route('tabs', {
		add: function(req) {
			controller.add(req, app)
		},
		remove: function(req) {
			controller.remove(req, app)
		}
	})
};
