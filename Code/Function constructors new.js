function person() {
    console.log(this);

    this.firstname = 'Jack';
    this.lastname = 'Sparrow';

    console.log('This function is invoked');

    return {greeting : 'I got in the way'};
}

var jack = new person(); // Here new is an operator and it creates an empty object and call the function
console.log(jack);


var jane = new person();
console.log(jane);


function person(firstname, lastname) {
    console.log(this);

    this.firstname = firstname;
    this.lastname = lastname;

    console.log('This function is invoked');
}

var vladimir = new person('Vladimir', 'Putin');
console.log(vladimir);

