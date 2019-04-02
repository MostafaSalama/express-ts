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
		'cookie-parser': '^1.4.4',
		debug: '^4.1.1',
		express: '^4.16.4',
		'http-errors': '^1.7.2',
		morgan: '^1.9.1',
		pug: '^2.0.3',
	};
	const devDependencies = {
		'@types/cookie-parser': '^1.4.1',
		'@types/express': '^4.16.1',
		'@types/http-errors': '^1.6.1',
		'@types/node': '^11.11.0',
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
