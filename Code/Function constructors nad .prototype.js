function person(firstname, lastname) {
    console.log(this);

    this.firstname = firstname;
    this.lastname = lastname;

    console.log('This function is invoked');
}

person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

var vladimir = new person('Vladimir', 'Putin');
console.log(vladimir);

person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;
}

console.log(vladimir.getFormalFullName());
console.log(vladimir.getFullName());

