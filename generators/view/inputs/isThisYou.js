/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file isThisYou on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 16/12/2017
 * Time: 13:58
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const logs = require('../../common/logs.js');

	const prompts = [
		{
			type   : 'confirm',
			name   : 'isThisYou',
			message: 'Are you ',
			default: true
		}
	];

	module.exports = class AppName {
		static set($that) {
			logs.hintHeader($that);

			prompts[0].message += $that.config.get('authorFirstName');
			prompts[0].message += ' ';
			prompts[0].message += $that.config.get('authorLastName');
			prompts[0].message += ' <';
			prompts[0].message += $that.config.get('authorEmail');
			prompts[0].message += '> ?';

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.isThisYou = $response.isThisYou;
			$that.log();
		}
	};

})();