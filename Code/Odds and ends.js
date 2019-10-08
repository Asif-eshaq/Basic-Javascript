var people = [
    {
        firstname : 'Jack',
        lastname : 'Sparrow',
        address : [
            '111 main st.',
            '222 third st.'
        ]
    },
    {
        firstname : 'Jane',
        lastname : 'Sparrow',
        address : [
            '333 Main st.',
            '444 Fifth st.'
        ],
        greet : function() {
            return 'Hello!';
        }
    }
]

console.log(people);


// Typeof and instanceof
var a = 3;
console.log(typeof a);

var b = "hello";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d);
console.log(d.toString());
console.log(Object.prototype.toString.call(d)); // Better

function Person(name) {
    this.name = name;
}

var e = new Person('Jack');
console.log(typeof e);
console.log(e instanceof Person);

console.log(typeof undefined);
console.log(typeof null);

var z = function() {};
console.log(typeof z);