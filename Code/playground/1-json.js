const fs = require('fs');
const book = {
    title : 'Ego is the enemy',
    author : 'Ryan Holiday'
};

const bookJson = JSON.stringify(book);
console.log(bookJson);

const parseData = JSON.parse(bookJson);

console.log(parseData.author);

fs.writeFileSync('1-json.json', bookJson);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);
console.log(data.title);