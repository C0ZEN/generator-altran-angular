/**
 <%- include('../../../../common/partial/header.txt') %>
 */
/* eslint key-spacing:"off" */
module.exports = {
	html   : '<%%= currentTarget %%>/index.html',
	options: {
		dest: '<%%= currentTarget %%>',
		flow: {
			steps: {
				js : [
					'concat'
				],
				css: [
					'concat'
				]
			}
		}
	}
};