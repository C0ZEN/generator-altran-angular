/**
 <%- include('../../../../common/partial/header.txt') %>
 */
/* eslint key-spacing:"off" */
module.exports = function (grunt) {
	return {
		options: {
			inline: true
		},
		dev    : {
			options: {
				context: {
					config: grunt.file.read('app/config/targets/config.dev.json'),
					target: 'dev'
				}
			},
			files  : {
				'<%%= paths.app %%>/config/target.config.js': '<%%= paths.app %%>/config/tpls/target.config.tpl.js',
				'<%%= paths.app %%>/index.html'             : '<%%= paths.app %%>/config/tpls/index.tpl.html'
			}
		},
		test   : {
			options: {
				context: {
					config: grunt.file.read('app/config/targets/config.test.json'),
					target: 'test'
				}
			},
			files  : {
				'<%%= paths.app %%>/config/target.config.js': '<%%= paths.app %%>/config/tpls/target.config.tpl.js',
				'<%%= currentTarget %%>/index.html'         : '<%%= paths.app %%>/config/tpls/index.tpl.html'
			}
		},
		preprod: {
			options: {
				context: {
					config: grunt.file.read('app/config/targets/config.preprod.json'),
					target: 'preprod'
				}
			},
			files  : {
				'<%%= paths.app %%>/config/target.config.js': '<%%= paths.app %%>/config/tpls/target.config.tpl.js',
				'<%%= currentTarget %%>/index.html'         : '<%%= paths.app %%>/config/tpls/index.tpl.html'
			}
		},
		prod   : {
			options: {
				context: {
					config: grunt.file.read('app/config/targets/config.prod.json'),
					target: 'prod'
				}
			},
			files  : {
				'<%%= paths.app %%>/config/target.config.js': '<%%= paths.app %%>/config/tpls/target.config.tpl.js',
				'<%%= currentTarget %%>/index.html'         : '<%%= paths.app %%>/config/tpls/index.tpl.html'
			}
		}
	};
};