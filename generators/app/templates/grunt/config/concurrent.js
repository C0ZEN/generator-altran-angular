/**
 <%- include('../../../../common/partial/header.txt') %>
 */
/* eslint key-spacing:"off" */
module.exports = {
	server : [
		'copy:styles'
	],
	test   : [
		'copy:styles'
	],
	release: [
		'copy:release',
		'copy:components',
		'imagemin:release'
	]
};