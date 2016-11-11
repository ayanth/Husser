/**
 * Created by antoine on 2016-11-11.
 */
const Document = require('camo').Document;

class Tab extends Document {
	constructor() {
		super();

		this.name = String;
		this.url = String;
		this.type = String;
	}
}

module.exports = Tab;