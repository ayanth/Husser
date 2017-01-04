/**
 * Created by antoine on 2016-11-17.
 */

module.exports = function(app) {
	let controller = require('../controllers/songs.server.controller.js');

	app.io.route('songs', {
		add: function(req) {
			controller.add(req, app)
		},
		'add-many': function(req) {
			controller.addMany(req, app);
		},
		remove: function(req) {
			controller.remove(req, app)
		}
	})
};
