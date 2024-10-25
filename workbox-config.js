module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,json,md,js,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};