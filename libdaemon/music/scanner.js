/**
 * Created by antoine on 2016-11-15.
 */
if(process.argv.length < 3){
	process.exit();
}
const root = process.argv[2];
const fs = require('fs-extra');
const path = require('path');
const through2 = require('through2');
const sync = require('synchronize');
const mmm = require('mmmagic');

const client = require('socket.io-client');
const expressConfigs = require('../../expressio/configs/base');
const socket = client.connect('http://' + expressConfigs.ip + ':' + expressConfigs.port);


let excludeDirFilter = through2.obj(function(item, enc, next) {
	if (!item.stats.isDirectory()){
		this.push(item);
	}
	next()
});

let items = [];
fs.walk(root)
	.pipe(excludeDirFilter)
	.on('data', item => {
		items.push(item.path)
	})
	.on('end', () => {
		let songs = filterMusicFiles(items, songs => {
			socket.emit('songs:add-many', {libraryRoot: root, songs: songs});
		});
	});

function filterMusicFiles(items, cb){
	console.log(items.length);
	let musicFiles = [];
	let	Magic = mmm.Magic;
	let magic = new Magic(mmm.MAGIC_MIME_TYPE);
	sync.fiber(() => {
		for (let i = 0; i < items.length; i++){
			console.log(i);
			let result = sync.await(magic.detectFile(items[i], sync.defer()));
			if(result.indexOf('audio') != -1){
				musicFiles.push(items[i]);
			}
		}
		return cb(musicFiles);
	});
}