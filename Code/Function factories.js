function makeGreeting(language) {

    return function(firstname, lastname) {
        if (language === 'English') {
            console.log('Hello ' + firstname + ' ' + lastname);
        }
    
        if (language === 'Spanish') {
            console.log('Hola ' + firstname + ' ' + lastname);
        }
    }
}

var greetEnglish = makeGreeting('English');
var greetSpanish = makeGreeting('Spanish');

greetEnglish('Jack', 'Sparrow');
greetSpanish('Vladimir', 'Putin');