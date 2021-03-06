/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file authorEmail on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 18/11/2017
 * Time: 23:31
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const _    = require('lodash');
	const logs = require('../../common/logs.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'authorEmail',
			message: 'Your email:'
		}
	];

	const hints = [
		'Simply set up your email.'
	];

	module.exports = class AuthorEmail {
		static set($that, $defaultFromMemory) {
			logs.hints($that, hints);

			prompts[0].default = $defaultFromMemory ? $that.authorEmail : $that.config.get('authorEmail') || $that.user.git.email() || _.lowerCase($that.authorFirstName) + '.' + _.lowerCase($that.authorLastName) + '@cozen.com';

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.authorEmail = $response.authorEmail;
			$that.authorShort = $that.authorFirstName + ' ' + $that.authorLastName;
			$that.authorLong  = $that.authorFirstName + ' ' + $that.authorLastName + ' ' + $that.authorEmail;
			$that.config.set('authorEmail', $that.authorEmail);
			$that.config.set('authorShort', $that.authorShort);
			$that.config.set('authorLong', $that.authorLong);
			$that.log();
		}
	};

})();