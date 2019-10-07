var person = {
    firstname : 'Default',
    lastname : 'Default',
    getFullName : function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var jack = {
    firstname : 'Jack',
    lastname : 'Sparrow'
}

// Demo purpose
jack.__proto__ = person;
console.log(jack.getFullName());
console.log(jack.firstname);

var jane = {
    firstname : 'Jane'
}

jane.__proto__ = person;
console.log(jane.getFullName());




