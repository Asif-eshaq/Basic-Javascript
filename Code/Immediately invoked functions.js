// Function statement
function greet(name) {
    console.log('Hello ' + name);
}
greet('Vladimir');

//Using a function expression
var greetFunc = function(name) {
    console.log('Hello ' + name);
};
greetFunc('Jack');

// Immediately Invoked Function Expression (IIFE)
var greeting = function(name) {
    return 'Hello ' + name;
} ('Jack');
console.log(greeting);


var firstname = 'Jack';

(function(name) {
    var greeting = 'Inside IIEF : Hello';
    console.log(greeting + ' ' + name);
}(firstname));