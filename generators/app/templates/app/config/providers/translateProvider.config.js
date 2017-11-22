/**
 <%- include('../../../partial/header.txt') %>
 */
(function (angular) {
	'use strict';

	angular
		.module('<%= appNameCamel %>')
		.config(provider);

	provider.$inject = [
		'$translateProvider',
		'config'
	];

	function provider($translateProvider, config) {
		$translateProvider
			.useSanitizeValueStrategy(config.useSanitizeValueStrategy)
			.useStaticFilesLoader({
				prefix: config.useStaticFilesLoader.prefix,
				suffix: config.useStaticFilesLoader.suffix
			})
			.preferredLanguage(config.defaultLanguage);
	}

})(window.angular);