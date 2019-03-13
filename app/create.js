const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

const templateDir = path.join(__dirname,'..','template') ;

/**
 * creates a new dir(folder) in the  cwd
 * @param name {string} name of the dir(folder)
 * @return {string} the path of the dir(folder)
 */
function createDir(name) {
    console.log(chalk.green(`creating the ${name} folder`));
    const dirPath = path.join(process.cwd(),name) ;
    try {
        fs.mkdirSync(dirPath)
    }
    catch (e) {
        console.log(chalk.red(e.message)) ;
    }
    return dirPath ;
}

function createApp(name) {
	console.log(chalk.green('creating the app ...'));
}
module.exports = createApp;
