/**
 * Created by antoine on 2016-08-02.
 */
(function() {
	'use strict';
	var gui = require('nw.gui');
	var window = gui.Window.get();

	window.show(true);
	window.enterKioskMode();

	window.showDevTools();
	window.enterFullscreen();
	//window.setAlwaysOnTop(true);
})();
