/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file validate on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 07/01/2018
 * Time: 19:08
 * Version: 0.12.5
 */
(function () {
	'use strict';

	const logs  = require('../../common/logs.js');
	const path  = require('path');
	const slash = require('slash');
	const edit  = require('./edit.js');
	const q     = require('q');

	const prompts = [
		{
			type   : 'confirm',
			name   : 'validate',
			message: 'Confirm the creation:',
			default: true
		}
	];

	module.exports = class Validate {
		static set($that) {
			const deferred = q.defer();
			const hints    = [
				'Controller name: ' + logs.value($that.controllerName + 'Controller'),
				'File name: ' + logs.value($that.fileName),
				'File path: ' + logs.value($that.controllerPath),
				'Complete path: ' + logs.value(slash(path.join($that.controllerPath, $that.fileName + '.controller.js')))
			];

			logs.hintsMultiline($that, hints);

			prompts[0].default = $that.controllerName;

			$that.prompt(prompts).then($response => {
				Validate.onSuccess($that, $response, deferred);
			});

			return deferred.promise;
		}

		static onSuccess($that, $response, $deferred) {
			$that.validate = $response.validate;
			$that.config.set('validate', $that.validate);
			$that.log();

			if (!$response.validate) {
				edit.set($that).then(() => {
					$deferred.resolve(Validate.set($that));
				});
			}
			else {
				$deferred.resolve($response.validate);
			}
		}
	};

})();