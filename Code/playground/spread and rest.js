const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 6];

console.log(newNumbers);

// Objects

const person = {
    name: 'Mithun'
};

const newPerson = {
    ...person,
    age: 34
};

console.log(newPerson);


// rest 
const filter = (...args) => {
    return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3));