// Object property shorthand

const name = 'Jack';
const userAge = 25;

const user = {
    name : name,
    age : userAge,
    location : 'Dhaka'
};

console.log(user);

// Object destructuring

const product = {
    label : 'Weed',
    price : 5000,
    stock : 400,
    salePrice : undefined
};

// const label = product.label;
// const stock = product.stock;

// const {label : productLabel, stock, rating = 5} = product;
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, {label, stock}) => {
    // const {labe} = myProduct;
    console.log(type, label, stock);
}

transaction('order', product);

