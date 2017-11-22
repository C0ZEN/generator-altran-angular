/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file release on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 20/11/2017
 * Time: 21:52
 * Version: 1.0.0
 */
/* eslint valid-jsdoc:"off" */
module.exports = function (grunt) {
	grunt.registerMultiTask('release', 'Create a new stable version', () => {

		// Get the current target
		const target = this.data.target;
		grunt.config.set('currentTarget', target);

		// Run the release task
		grunt.task.run([
			'clean:release',
			'clean:devIndex',
			'wiredep',
			'preprocess:' + target,
			'jsMin:release',
			'less:main',
			'languages:release',
			'postcss:dev',
			'cssmin:dev',
			'string-replace:index',
			'useminPrepare',
			'usemin',
			'concat:generated',
			'uglify:vendors',
			'postcss:vendors',
			'cssmin:vendors',
			'htmlmin:release',
			'copy:release',
			'copy:i18n',
			'imagemin:release',
			'string-replace:cssPaths',
			'notify:release'
		]);
	});
};