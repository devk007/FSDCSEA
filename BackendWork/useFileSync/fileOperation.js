const fs = require('fs');
function dataWrite(){
    try{
        fs.writeFileSync("data.txt","Hello Node Js using Fs module");
        fs.writeFileSync("data.txt","Hello Node Js using Fs module");
    }
    catch(err){
        console.log(err);
    }
}

const rf=fs.readFileSync('data.txt',{encoding:'utf-8'});
console.log(rf);
