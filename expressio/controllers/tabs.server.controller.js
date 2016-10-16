/**
 * Created by Antoine on 2016-10-01.
 */
exports.add = function(req, app) {
	var newTab = req.data;
	req.io.broadcast('tabs:added', newTab)
};

exports.remove = function(req, app) {

};