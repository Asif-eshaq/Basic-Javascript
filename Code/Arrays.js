var arr = [
    1,
    true,
    {
        name : 'Asif',
        address : 'Hight palace'
    },
    function(name) {
        var greeting = 'Hola ';
        console.log(greeting + name);
    },
    "Hi"
];

console.log(arr);
arr[3](arr[2].name);

console.log(arr.length);