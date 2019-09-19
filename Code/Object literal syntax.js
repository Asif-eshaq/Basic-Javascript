//Object literals same as var person = new object()
var person = {
    firstname : 'Asif',
     lastname : "Eshaq",
     address : {
         street : '29',
         city : 'Dhaka',
         country : 'Bangladesh'
     }
    };

function greet(name) {
    console.log('Hi ' + name.firstname);
}
greet(person);

greet({
    firstname : 'Django',
    lastname : 'Freeman'
});

person.address2 = {
    street : "45",
}




