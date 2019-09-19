var objectLiteral = {
    firstname : 'Asif',
    isAGamer : true
};

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse(
    '{"firstname" : "Asif", "isAGamer" : true}'
    );

console.log(jsonValue);
