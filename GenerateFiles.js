var fs =  require('fs');
var path =  require('path');
var {v4 : uuid } = require('uuid');

const dirPath = path.join(__dirname, "codes");

if(! fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath, {recursive: true});
}

const GenerateFiles = async (format, code) => {   
    const fileName = `${uuid()}.${format}`;
    const filePath = path.join(dirPath, fileName);
    try{
        await fs.writeFileSync(filePath, code);
        return filePath;
    }
    catch(error){
        console.log(error);
    }
}

module.exports =  GenerateFiles;