var events = require('events');

var myEmitter = new events.EventEmitter();

var msg = "event emitted";

myEmitter.on('someEvent', function(msg){
    console.log(msg);
});

myEmitter.emit('someEvent',msg);

