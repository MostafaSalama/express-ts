const chalk = require('chalk');
const createIndex = require('./createIndex');
const createBin = require('./createBin');
const createRoutes = require('./createRoutes');
const packageBuilder = require('../config/package-json-builder');
const fs = require('fs');
const path = require('path');

function createApp(name = 'express-app') {
	console.log(chalk.green('creating the app ...'));
	fs.mkdirSync(path.join(process.cwd(), name));
	console.log(chalk.green('creating package.json File'));
	fs.createWriteStream(path.join(process.cwd(), name, 'package.json')).write(
		packageBuilder(name),
	);
	createIndex(name);
	console.log(chalk.green('creating bin folder'));
	createBin(name);
	console.log(chalk.green('creating routes'));
	createRoutes(name);
}
module.exports = createApp;
