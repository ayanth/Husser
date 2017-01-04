/**
 * Created by antoine on 2016-11-14.
 */
const Document = require('camo').Document;
const _ = require('lodash');

class Song extends Document {
	constructor() {
		super();
		this.libraryRoot =  String;
		this.path = String;
		this.artist = [String];
		this.albumartist = [String];
		this.title  = String;
		this.year  = String;
		this.genre = [String];
		this.duration = Number;
		this.track  = {
			no: Number,
			of: Number
		};
		this.disk = {
			no: Number,
			of: Number
		};
		this.picture = {
			format: Number,
			data: Buffer,
			base64: String
		};
	}
	setMetadata(metadata){
		this.artist       = metadata.artist     ;
		this.albumartist  = metadata.albumartist;
		this.title        = metadata.title      ;
		this.year         = metadata.year       ;
		this.genre        = metadata.genre      ;
		this.duration     = metadata.duration   ;
		this.track        = metadata.track      ;
		this.disk         = metadata.disk       ;
		this.picture      = metadata.picture    ;

		if(_.isEmpty(this.picture)){
			this.picture.base64 = this.picture.data.toString('base64');
		}
	}
}

module.exports = Song;