module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,md,js,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};