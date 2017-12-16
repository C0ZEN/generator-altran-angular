/**
 <%- include('../../../../common/partial/header.txt') %>
 */
/* eslint key-spacing:"off" */
module.exports = {
	dev    : {
		options: {
			collapseBooleanAttributes: true,
			collapseWhitespace       : true,
			removeAttributeQuotes    : true,
			removeComments           : true,
			removeCommentsFromCDATA  : true
		},
		files  : [
			{
				expand: true,
				cwd   : '<%%= paths.app %%>',
				src   : 'index.html',
				dest  : '<%%= paths.app %%>'
			}
		]
	},
	release: {
		options: '<%%= htmlmin.dev.options %%>',
		files  : [
			{
				expand: true,
				cwd   : '<%%= currentTarget %%>',
				src   : 'index.html',
				dest  : '<%%= currentTarget %%>'
			}
		]
	}
};