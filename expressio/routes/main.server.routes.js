/**
 * Created by Antoine on 2016-10-02.
 */

module.exports = function(app) {
	var controller = require('../controllers/main.server.controller.js');

	app.io.route('main', {
		connect: function(req) {
			controller.connect(req, app)
		}
	})
};
