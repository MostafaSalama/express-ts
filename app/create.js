const chalk = require('chalk');
const createIndex = require('./createIndex');
const createBin = require('./createBin');
const createRoutes = require('./createRoutes') ;
const fs = require('fs') ;
const path = require('path') ;

function createApp(name = 'express-app') {

	console.log(chalk.green('creating the app ...'));
	fs.mkdirSync(path.join(process.cwd(),name))
	createIndex(name);
	console.log(chalk.green('creating bin folder'));
	createBin(name);
	console.log(chalk.green('creating routes')) ;
	createRoutes(name);
}
module.exports = createApp;
