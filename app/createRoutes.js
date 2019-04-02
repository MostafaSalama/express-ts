const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const ROUTES = 'routes';
const routesTemplatePath = path.join(__dirname, '..', 'template', 'routes');
function routePath(appName,routeName) {
   return path.join(process.cwd(), appName,ROUTES,routeName);

}
function createRoutes(appName) {
	try {
		fs.mkdirSync(path.join(process.cwd(),appName, ROUTES));
		console.log(chalk.green('creating routes/index.ts'));
		const indexTemplate = fs.createReadStream(
			path.join(routesTemplatePath, 'index.ts'),
		);
		const index = fs.createWriteStream(routePath(appName,'index.ts'));
		indexTemplate.pipe(index);
		const usersTemplate = fs.createReadStream(
			path.join(routesTemplatePath, 'users.ts'),
		);
		const usersRoutes = fs.createWriteStream(routePath(appName,'users.ts'));
		console.log(chalk.green('creating routes/users.ts'));
		usersTemplate.pipe(usersRoutes);
	} catch (e) {
		console.log(e);
	}
}

module.exports = createRoutes ;