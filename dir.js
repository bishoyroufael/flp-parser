var fs = require('fs');

//delete a file
// fs.unlink('./readme.txt'); 

//creating a directory 
//fs.mkdirSync('nwdir');

//removing a directory
//fs.rmdirSync('nwdir');

//using async mkdir function to create dir, read file from base folder and copy it
//into the newly created folder 


fs.mkdir('asyncdir',function(){
    fs.readFile('readme.txt','utf8',function(err,data){
        fs.writeFile('./asyncdir/writeme.txt',data,()=>{});
    });
});


/*
//removing a directory -> remove all files inside , then remove directory
fs.unlink('./asyncdir/writeme.txt',function () {
    fs.rmdir('./asyncdir',()=>{});    
})

*/



