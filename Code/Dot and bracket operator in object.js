var person = new Object();

person["firstname"] = "Asif";
person["lastname"] = "Eshaq";

var firstnameProperty = "firstname";

console.log(person);
console.log(person[firstnameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = "29";
person.address.city = "Dhaka";
person.address.country = "Bangladesh";

console.log(person.address.street);

console.log(person["address"]["country"]);