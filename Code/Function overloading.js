function greet(firstname, lastname, language) {

    language = language || 'English';

    if (language === 'English') {
        console.log('Hello ' + firstname + ' ' + lastname);
    }

    if (language === 'Spanish') {
        console.log('Hola ' + firstname + ' ' + lastname);
    }
}

// Default way
greet('Vladimir', 'Putil', 'Spanish');

function greetEnglish(firstname, lastname) {
    greet(firstname, lastname, 'English');
}

function greetSpanish(firstname, lastname) {
    greet(firstname, lastname, 'Spanish');
}

greetSpanish('Vladimir', 'Putin');