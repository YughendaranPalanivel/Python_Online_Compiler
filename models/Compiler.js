var fs = require('fs');
var GenerateFiles = require('../GenerateFiles.js');
var ExecuteFile = require('../ExecuteFile.js');

const ENUM = {
    defaultFormat: "cpp"
}

const Compiler = async (req, res) =>{
    const {format = ENUM.defaultFormat, code} = req.body;

    if(code === undefined || code === ""){
        res.status(400).json({success:false, output: "Empty code body"});
    }
    else{
        // Creating a executable file
        const filePath = await GenerateFiles(format, code);
        try{
            const stdout = await ExecuteFile(filePath);
            fs.unlink(filePath,(err) => {
                if(err) throw err;
            });
            res.status(200).json({success:true, output: stdout});
        }
        catch(error){
            fs.unlink(filePath,(err) => {
                if(err) throw err;
            });
            res.status(200).json({success:false, output: error.stderr});
        }
    }
}

module.exports =  Compiler;