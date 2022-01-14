var {exec} = require('child_process');
var { setTimeout } = require('timers');

// Execute the file and return output
const ExecuteFile = async (filepath) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {reject("Runtime input are not supported")},5000)
        exec(`python ${filepath}`,
        (error, stdout, stderr)=>{
            error && reject({error, stderr});
            stderr && reject(stderr);
            resolve(stdout);
        }
        )
    })
}

module.exports =  ExecuteFile;