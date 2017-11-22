/**
 <%- include('../../../partial/header.txt') %>
 */
(function (angular) {
	'use strict';

	angular
		.module('<%= appNameCamel %>')
		.config(provider);

	provider.$inject = [
		'altranThemeProvider',
		'config'
	];

	function provider(altranThemeProvider, config) {
		altranThemeProvider
			.setCurrent(config.theme);
	}

})(window.angular);