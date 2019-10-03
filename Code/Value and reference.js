//by value(primitive)
var a = 3;
var b;

b = a;
a = 2;

console.log(a);
console.log(b);

//by reference(object)

var c = {greeting : 'hi'};
var d;

d = c;
c.greeting = 'hello';

console.log(c);
console.log(d);

//by reference (even as parameters)
function changeGreeting(obj) {
    obj.greeting = 'Si';
}

changeGreeting(c);
console.log(c);
console.log(d);

//equal operator sets up new address
c = {greeting : 'Hola'};
console.log(c);
console.log(d);