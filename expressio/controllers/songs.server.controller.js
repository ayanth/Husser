/**
 * Created by Antoine on 2016-10-01.
 */
const Song = require('../models/songs.model');
const async = require('async');
const fs = require('fs');
const mm = require('musicmetadata');

function getMetadata(filePath, cb) {
	mm(fs.createReadStream(filePath), cb);
}

exports.add = function(req, app) {
	// let tab = new Tab();
	// let newTab = req.data;
	// tab.save();
	// app.io.emit('tabs:added', newTab)
};
exports.addMany = function(req, app) {
	let songPaths = req.data.songs;
	let libraryRoot = req.data.libraryRoot;
	async.each(songPaths, (songPath, next) => {
		getMetadata(songPath, (err, meta) => {
			if(err){return next(err);}
			console.log(meta);
			let song = new Song();
			song.setMetadata(meta);
			song.libraryRoot = libraryRoot;
			song.path = songPath;
			song.save();
		});
	}, function done(err) {
		console.log('Done saving new files.');
		if(err){throw err}
	})
};

exports.remove = function(req, app) {

};