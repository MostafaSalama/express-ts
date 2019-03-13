const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
function createIndexTemplate(appName) {
	console.log(chalk.green('creating index.ts'));
	const indexPath = path.join(__dirname, '..', 'template/index.ts');
	const fileDate = fs.readFileSync(indexPath);
	const projectFile = fs.createWriteStream(
		path.join(process.cwd(), 'index.ts'),
	);
	projectFile.write(fileDate, err => {
		if(err) throw err ;
	});
}
module.exports = createIndexTemplate;
