(function () {
	'use strict';

	const Generator     = require('yeoman-generator');
	const chalkInstance = require('chalk');
	const chalk         = new chalkInstance.constructor({
		level  : 3,
		enabled: true
	});
	const yosay         = require('yosay');
	const upperCase     = require('upper-case');
	const moment        = require('moment');

	const colors = require('./colors.js');
	const utils  = require('./utils.js');

	const appName        = require('./inputs/appName.js');
	const appDescription = require('./inputs/appDescription.js');
	const theme          = require('./inputs/theme.js');
	const lang           = require('./inputs/lang.js');
	const color          = require('./inputs/color.js');
	const author         = require('./inputs/author.js');
	const authorEmail    = require('./inputs/authorEmail.js');

	const writingMain        = require('./writing/main.js');
	const writingMarkdown    = require('./writing/markdown.js');
	const writingLinter      = require('./writing/linter.js');
	const writingJson        = require('./writing/json.js');
	const writingProviders   = require('./writing/providers.js');
	const writingDirectories = require('./writing/directories.js');
	const writingApp         = require('./writing/app.js');
	const writingTargets     = require('./writing/targets.js');
	const writingLanguages   = require('./writing/languages.js');
	const writingStyles      = require('./writing/styles.js');
	const writingTpls        = require('./writing/tpls.js');
	const writingGruntConfig = require('./writing/gruntConfig.js');
	const writingGruntTasks  = require('./writing/gruntTasks.js');

	module.exports = class extends Generator {
		constructor($args, $opts) {
			super($args, $opts);

			this.logPriority = ($priority, $spaceBefore) => {
				if ($spaceBefore) {
					this.log('');
				}
				this.log(chalk.hex(colors.get('orange')).bold('>>> %s <<<\n'), upperCase($priority));
			};

			this.logHint = $text => {
				this.log(chalk.hex(colors.get('purple'))($text + '\n'));
			};

			this.logHints = $texts => {
				for (let i = 0, length = $texts.length; i < length; i++) {
					this.logHint($texts[i]);
				}
			};

			this.logHintHeader = () => {
				this.log(chalk.hex(colors.get('purple')).bold('Hint:\n'));
			};

			this.logHintsMultiline = $texts => {
				let text = '';
				for (let i = 0, length = $texts.length; i < length; i++) {
					text += $texts[i];
					if (i + 1 < length) {
						text += '\n';
					}
				}
				this.logHint(text);
			};
		}

		initializing() {
			this.logPriority('initializing');

			moment.locale('en');

			this.log(yosay('Welcome to the wonderful ' + chalk.hex(colors.get('red'))('generator-cozen-angular') + ' generator !'));

			const prompts = [
				{
					type   : 'confirm',
					name   : 'areYouReady',
					message: 'Are you ready to set up your app ?',
					default: true
				}
			];

			return this.prompt(prompts).then($response => {
				this.areYouReady = $response.areYouReady;
			});
		}

		prompting() {
			this.logPriority('prompting', true);
		}

		configuring() {
			this.logPriority('configuring', false);
		}

		inputAppName() {
			return appName.set(this);
		}

		inputAppDescription() {
			return appDescription(this);
		}

		inputTheme() {
			return theme(this);
		}

		inputLang() {
			return lang(this);
		}

		inputColor() {
			return color(this);
		}

		inputAuthor() {
			return author.set(this);
		}

		inputAuthorEmail() {
			return authorEmail(this);
		}

		writing() {
			this.now     = moment();
			this.nowDate = this.now.format('DD/MM/YYYY');
			this.nowTime = this.now.format('HH:mm');
			this.log('Now :', chalk.hex(colors.get('cyan'))(this.nowDate, this.nowTime));

			this.logPriority('writing', true);
			writingMain(this);
			writingMarkdown(this);
			writingLinter(this);
			writingJson(this);
			writingProviders(this);
			writingApp(this);
			writingTargets(this);
			writingTpls(this);
			writingLanguages(this);
			writingStyles(this);
			writingDirectories();
			writingGruntConfig(this);
			writingGruntTasks(this);
		}

		conflicts() {
			this.logPriority('conflicts', false);
		}

		install() {
			this.logPriority('install', true);

			utils.installNpmPackages(this);
			utils.installBowerPackages(this);
		}

		end() {
			this.logPriority('end', true);
			this.log(chalk.hex(colors.get('green'))('That\'s all folks !'));
			this.log(chalk.hex(colors.get('green'))('Your project is ready ;)\n'));
			this.log(
				'Use the',
				chalk.hex(colors.get('navy')).bgHex(colors.get('grey'))('grunt-cli'),
				'or',
				chalk.hex(colors.get('navy')).bgHex(colors.get('grey'))('grunt serve'),
				'to start the server.'
			);
		}
	};

})();
