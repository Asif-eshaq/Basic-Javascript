function greet(firstname, lastname, language) {
    
    language = language || 'English';

    if (arguments.length === 0) {
        console.log('Missing parameters');
        console.log('-----------------');
        return;
    }

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log('arg 0 ' + arguments[2]);
    console.log('-----------------');
}

greet();
greet('Vladimir');
greet('Vladimir', 'Putin', 'Rusky');