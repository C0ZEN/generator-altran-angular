/**
 <%- include('../../common/partial/header.txt') %>
 */
(function (angular) {
	'use strict';

	angular
		.module('<%= appNameCamel %>')
		.controller('<%= controllerName %>', <%= controllerName %>);

	<%= controllerName %>.$inject = [];

	function <%= controllerName %>() {
		var vm = this;

		vm.methods = {};
	}

})(window.angular);