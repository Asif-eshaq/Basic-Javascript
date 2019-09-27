greet();

function greet() {
    console.log('Hello');
}

//Below an object is being created
var anonymousGreet = function() {
    console.log('Hello');
}

anonymousGreet();


function log(a) {
    console.log(a);
}
log('Hello');


function log(b) {
    console.log(b);
}
log({
    greeting : 'Hello'
});


function log(c) {
    console.log(c);
}
log(function() {
    console.log('Hello');
});

function log(d) {
    d();
}
log(function() {
    console.log('Hello');
});

