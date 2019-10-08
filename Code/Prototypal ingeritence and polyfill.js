// Polyfill if and only if the browser doesnt have object.create
if (!Object.create) {
    Object.create = function(o) {
        if (arguments.length > 1) {
            throw new Error('Object.create implementation'
            + ' only accepts the first parameter.');
        }
        function F() {}
        F.prototype = o;
        return new F();
    };
}

var person = {
    firstname : 'Default',
    lastname : 'Default',
    greet : function() {
        return 'Hi ' + this.firstname;
    }
}

var jack = Object.create(person); // It creates new object from the object i made earlier
jack.firstname = 'Jack';
jack.lastname = 'Sparrow';
console.log(jack);
