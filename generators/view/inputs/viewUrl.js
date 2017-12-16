/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file viewUrl on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 16/12/2017
 * Time: 15:00
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const logs = require('../../common/logs.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'viewUrl',
			message: 'Url of the view :',
			default: 'view-url/:someToken'
		}
	];

	const hints = [
		'The url of the view is the one visible in the browser.',
		'It should be write as kebab-case.',
		'You can add visible param as well'
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
			$that.viewUrl = $response.viewUrl;
			$that.config.set('viewUrl', $that.viewUrl);
			$that.log();
		}
	};

})();