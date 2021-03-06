/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file languages on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 19/11/2017
 * Time: 10:55
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const utils = require('../../common/utils.js');

	module.exports = $that => {
		utils.copyFileTpl($that, 'app/languages/en/global.json', {
			appNameUpperPython: $that.appNameUpperPython,
			appName           : $that.appName
		});
		utils.copyFileTpl($that, 'app/languages/fr/global.json', {
			appNameUpperPython: $that.appNameUpperPython,
			appName           : $that.appName
		});
	};

})();