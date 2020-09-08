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

// new
class Human {
    constructor() {
        this.gender = 'male';
    }

    printGender() {
        console.log(this.gender);
    }
}

// const human = new Human();
// human.printGender();

class Person extends Human {
    constructor() {
        super();
        this.name = 'Mithun';
    }

    printName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printName();
person.printGender();

// ES6 Method

class Human {
    gender = 'male';

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    name = 'Mithun';
    gender = 'female';

    printName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printName();
person.printGender();
