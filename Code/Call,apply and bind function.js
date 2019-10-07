var person = {
    firstname : 'Jack',
    lastname : 'Sparrow',
    getFullName : function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}


// bind()

// IIFE
var logName = function(lang1, lang2) {
    console.log('Logged : ' + this.getFullName());
}.bind(person);

logName();


var logName = function(lang1, lang2) {
    console.log('Logged : ' + this.getFullName());
    console.log('Arguments : ' + lang1 + ' ' + lang2);
    console.log('----------------------------------------');
}

var logPersonName = logName.bind(person); // Returns a new function and actually makes a copy of LogName function

logPersonName('English');

// call()
logName.call(person, 'English', 'Spanish'); // same as logName() but let me control

// apply()
logName.apply(person, ['English', 'Spanish']); // same as call but uses Array


// IIFE for call and apply
(function(lang1, lang2) {
    console.log('Logged : ' + this.getFullName());
    console.log('Arguments : ' + lang1 + ' ' + lang2);
    console.log('----------------------------------------');
}).apply(person, ['Bangla', 'Italian']);


// Function borriwing
var person2 = {
    firstname : 'Vladimir',
    lastname : 'Putin'
}

console.log(person.getFullName.apply(person2));


//Function currying
function multiply(a, b) {
    return a * b;
}

var multipleByTwo = multiply.bind(this, 2); // sets a = 2
console.log(multipleByTwo(4));

var multipleByThree = multiply.bind(this, 3); // sets a = 2
console.log(multipleByThree(4));