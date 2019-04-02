const path = require('path');
const fs = require('fs');
const chalk = require('chalk') ;
function createViews(appName) {
	const views = path.join(__dirname, '..', 'template', 'views');
	const viewNewPath = path.join(process.cwd(), appName, 'views');
	fs.mkdirSync(viewNewPath);
	let viewsFiles = fs.readdirSync(views);
	viewsFiles.forEach(view => {
	    console.log(chalk.green(`creating views/${view}`))
		let r = fs.createReadStream(path.join(views, view));
		let w = fs.createWriteStream(path.join(viewNewPath,view));
		r.pipe(w) ;
	});
}
module.exports = createViews ;
