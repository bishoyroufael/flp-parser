var fs = require('fs');
var http = require('http');

//Creating a readable stream
var myReadStream = fs.createReadStream(__dirname + '/readme.txt','utf8');

myReadStream.on('data',function(myData){

    console.log(myData);
})

// console.log(myReadStream);