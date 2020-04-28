var counter = function(arr){

    return arr.length;
}

var adder = function (a,b){
    return `The sum is ${a+b}`;
};

var pi = 3.14159;

module.exports.counter=counter; // counter function being returned when require() is called on the other side
module.exports.adder=adder;
module.exports.pi=pi;

/* 
can be also done in this form

modules.exports={
    counter: counter,
    adder: adder,
    pi: pi
};

*/
