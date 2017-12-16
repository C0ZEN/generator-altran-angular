/* jshint -W117 */
(function () {
	'use strict';

	const path    = require('path');
	const assert  = require('yeoman-assert');
	const helpers = require('yeoman-test');

	const appName = 'Test View for new user';

	describe('generator-cozen-angular:view', () => {
		beforeAll(() => {
			return helpers.run(path.join(__dirname, '../generators/view'))
				.withPrompts({
					appName        : appName,
					isThisYou      : false,
					authorFirstName: 'Geoffrey',
					authorLastName : 'Testelin',
					authorEmail    : 'geoffrey.testelin@gmail.com'
				});
		});

		it('create view js files', () => {
			assert.file([
				'app/views/viewName/viewName.controller.js',
				'app/views/viewName/viewName.state.js',
				'app/views/viewName/viewName.service.js',
				'app/views/viewName/viewName.constant.js'
			]);
		});

		it('create view html files', () => {
			assert.file([
				'app/views/viewName/viewName.template.html'
			]);
		});

		it('create view styles files', () => {
			assert.file([
				'app/views/viewName/styles/viewName.less',
				'app/views/viewName/styles/viewName.mixins.less',
				'app/views/viewName/styles/viewName.variables.less'
			]);
		});

		it('create view languages files', () => {
			assert.file([
				'app/views/viewName/languages/fr.json',
				'app/views/viewName/languages/en.json'
			]);
		});
	});
})();