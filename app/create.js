const chalk = require('chalk');
const createIndex = require('./createIndex');
const createBin = require('./createBin');
const createRoutes = require('./createRoutes') ;



function createApp(name) {
	console.log(chalk.green('creating the app ...'));
	createIndex();
	console.log(chalk.green('creating bin folder'));
	createBin();
	console.log(chalk.green('creating routes')) ;
	createRoutes();
}
module.exports = createApp;
