/**
 * Created by antoine on 2016-08-02.
 */
(function() {
	'use strict';
	const gui = require('nw.gui');
	const window = gui.Window.get();

	window.show(true);
	window.enterKioskMode();

	window.showDevTools();
	window.enterFullscreen();
	//window.setAlwaysOnTop(true);
})();
