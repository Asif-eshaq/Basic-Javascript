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

for (var prop in jack) {
    if(jack.hasOwnProperty(prop)) {
    console.log(prop + ' : ' + jack[prop]);
    }
}
