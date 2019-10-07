function sayHiLater() {
    var greeting = 'Hi';

    setTimeout(function() {
        console.log(greeting);
    }, 3000);
}

sayHiLater();



// Callback
function tellMeWhenDone(callback) {
    var a = 100;
    var b = 2000;
    console.log(a);

    callback(); // It runs the function i give it
}

tellMeWhenDone(function() {
    console.log('I am done!');
});

tellMeWhenDone(function() {
    alert('I am done');
});