/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file appDescription on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 18/11/2017
 * Time: 23:19
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const logs = require('../../common/logs.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'appDescription',
			message: 'Description of your app:'
		}
	];

	const hints = [
		'Just describe the purpose of your project.'
	];

	module.exports = class AppDescription {
		static set($that, $defaultFromMemory) {
			logs.hints($that, hints);

			prompts[0].default = $defaultFromMemory ? $that.appDescription : 'This is the description for the project ' + $that.appName;

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.appDescription = $response.appDescription;
			$that.config.set('appDescription', $that.appDescription);
			$that.log();
		}
	};

})();