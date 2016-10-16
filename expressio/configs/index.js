/**
 * Created by Antoine on 2016-10-01.
 */
var _ = require('lodash');

module.exports = _.assignIn({},
	{base: require('./base')},
	{db: require('./db')},
	{express: require('./express')}
);