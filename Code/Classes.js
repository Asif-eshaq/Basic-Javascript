// Here class is nothig but an object in javascript
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        return 'Hi ' + this.firstname;
    }
}

var jack = new Person('Jack', 'Sparrow');
console.log(jack);
