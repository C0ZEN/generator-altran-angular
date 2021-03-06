/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file languagesFiles on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 16/12/2017
 * Time: 19:23
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const utils = require('../../common/utils.js');

	module.exports = $that => {
		const filePath = utils.getViewsPath($that, true);
		const config     = {
			viewNameCamel      : $that.viewNameCamel,
			viewNameKebab      : $that.viewNameKebab,
			viewNameUpperPython: $that.viewNameUpperPython,
			appNameKebab       : $that.config.get('appNameKebab'),
			nowDate            : $that.nowDate,
			nowTime            : $that.nowTime,
			authorShort        : $that.config.get('authorShort'),
			currentVersion     : $that.currentVersion
		};

		utils.copyFileTpl($that, 'languages/fr.json', config, filePath + '/languages/fr/fr.json');
		utils.copyFileTpl($that, 'languages/en.json', config, filePath + '/languages/en/en.json');
	};

})();