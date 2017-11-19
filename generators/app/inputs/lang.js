/**
 * Generated header by C0ZEN for generator-altran-angular project
 * Generated file lang on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 18/11/2017
 * Time: 23:30
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const chalkInstance = require('chalk');
	const chalk         = new chalkInstance.constructor({
		level  : 3,
		enabled: true
	});
	const colors        = require('../colors.js');
	const _             = require('lodash');

	const prompts = [
		{
			type   : 'input',
			name   : 'lang',
			message: 'Default altran-angular-lib lang :',
			default: 'fr',
			store  : true
		}
	];

	module.exports = $that => {
		$that.logHint();
		$that.logHint('The default language of your application.');

		$that.log('Current lang list :');
		$that.log(chalk.hex(colors.get('cyan'))('fr'));
		$that.log(chalk.hex(colors.get('cyan'))('en'));

		return $that.prompt(prompts).then($response => {
			$that.lang = _.lowerCase($response.lang);
			$that.log();
		});
	};

})();