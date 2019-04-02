const fs = require('fs') ; 
const path = require('path') ; 

function createPublic(appName) {
    try {
        const publicPath = path.join(process.cwd(),appName,'public') ;
        const imagesPath = path.join(publicPath,'images');
        const jsPath = path.join(publicPath,'js');
        const stylesheetsPath = path.join(publicPath,'css');
        fs.mkdirSync(publicPath);
        fs.mkdirSync(imagesPath);
        fs.mkdirSync(jsPath);
        fs.mkdirSync(stylesheetsPath);
    }catch (e) {
        throw e ;
    }
}
module.exports = createPublic ;