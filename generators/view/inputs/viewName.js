/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file viewName on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 16/12/2017
 * Time: 13:16
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const _         = require('lodash');
	const camelCase = require('camelcase');
	const logs      = require('../../common/logs.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'viewName',
			message: 'Name of the view :',
			default: 'viewName'
		}
	];

	const hints = [
		'The name of the view will be used to create a folder on your current path.',
		'All generated files have references to this name, so choose it properly.'
	];

	module.exports = class AppName {
		static set($that) {
			logs.hintHeader($that);
			logs.hintsMultiline($that, hints);

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.viewName      = $response.viewName;
			$that.viewNameCamel = camelCase($response.viewName);
			$that.viewNameKebab = _.kebabCase($response.viewName);
			$that.config.set('viewName', $that.viewName);
			$that.config.set('viewNameCamel', $that.viewNameCamel);
			$that.config.set('viewNameKebab', $that.viewNameKebab);
			$that.log();
		}
	};

})();