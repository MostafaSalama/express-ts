const fs = require('fs');
const path = require('path');
const BIN = 'bin';

function createBin(appName) {
	try{
        fs.mkdirSync(path.join(process.cwd(),appName, BIN));
        const binFile = fs.createReadStream(
            path.join(__dirname, '..', 'template/bin/www.ts'),
        );

        const writeFile = fs.createWriteStream(
            path.join(process.cwd(),appName, BIN, 'www.ts'),
        );
        binFile.pipe(writeFile);
	}
	catch (e) {
		console.log(e);
    }
}

module.exports = createBin;
