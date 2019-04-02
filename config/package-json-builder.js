/*
    this file is used to build
    package.json file
    for the created project
    by the command line
 */
/**
 *
 * @param name {String} the name of the project
 * @return {String} the json string representation of package.json file
 */
module.exports = function(name = 'express-ts') {
	// the version of the app
	const version = '0.0.1';
	const description = 'A simple express app created with express-ts';
	const main = './bin/www.js';
	const dependencies = {
		'cookie-parser': 'latest',
		debug: 'latest',
		express: 'latest',
		'http-errors': 'latest',
		morgan: 'latest',
		pug: 'latest',
	};
	const devDependencies = {
		'@types/cookie-parser': 'latest',
		'@types/express': 'latest',
		'@types/http-errors': 'latest',
		'@types/node': 'latest',
	};
	const scripts = {
		start: 'node ./bin/www.js',
	};

	const appPackage = {
		version,
		name,
		description,
		main,
		scripts,
		dependencies,
		devDependencies,
	};
	return JSON.stringify(appPackage,null,'\t') ;
};
