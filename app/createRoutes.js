const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const ROUTES = 'routes';
const routesTemplatePath = path.join(__dirname, '..', 'template', 'routes');
const indexTsPath = path.join(process.cwd(), ROUTES, 'index.ts');
const usersTs = path.join(process.cwd(), ROUTES, 'users.ts');

function createRoutes() {
	try {
		fs.mkdirSync(path.join(process.cwd(), ROUTES));
		console.log(chalk.green('creating routes/index.ts'));
		const indexTemplate = fs.createReadStream(
			path.join(routesTemplatePath, 'index.ts'),
		);
		const index = fs.createWriteStream(indexTsPath);
		indexTemplate.pipe(index);
		const usersTemplate = fs.createReadStream(
			path.join(routesTemplatePath, 'users.ts'),
		);
		const usersRoutes = fs.createWriteStream(usersTs);
		console.log(chalk.green('creating routes/users.ts'));
		usersTemplate.pipe(usersRoutes);
	} catch (e) {
		console.log(e);
	}
}

module.exports = createRoutes ;