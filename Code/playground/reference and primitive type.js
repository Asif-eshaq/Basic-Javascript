const person = {
    name: 'Max'
};

const secondPerson = person;

person.name = "Mithun";

console.log(secondPerson);

// to avoid copying the pointer

const person = {
    name: 'Max'
};

const secondPerson = {
    ...person
};

person.name = "Mithun";

console.log(saecondPerson);