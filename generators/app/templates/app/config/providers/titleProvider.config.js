/**
 <%- include('../../../partial/header.txt') %>
 */
(function (angular) {
	'use strict';

	angular
		.module('<%= appNameCamel %>')
		.config(provider);

	provider.$inject = [
		'altranTitleProvider',
		'config'
	];

	function provider(altranTitleProvider, config) {
		altranTitleProvider
			.defaultTitle(config.defaultTitle);
	}

})(window.angular);