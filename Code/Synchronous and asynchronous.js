//long running function
function fiveSecond() {
    var ms = 5000 + new Date().getTime();
    while(new Date() < ms) {
    } 
    console.log('Function finished');
}

function clickHandler() {
    console.log('Click event!');
}

//For click event
document.addEventListener('click', clickHandler);

fiveSecond();
console.log('Execution Done');
