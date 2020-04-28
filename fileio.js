var fs = require('fs');

// async with call back function
fs.readFile('./readme.txt','utf8',function(err,data){
    fs.writeFile('./async.txt',data + ' //async',()=>{});
})

//sync
var data= fs.readFileSync('./readme.txt','utf8');
fs.writeFileSync('./syn.txt',data + ' //sync');
