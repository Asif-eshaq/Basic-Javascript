function greet(name) {

    //if name is UNDEFINED, it will return the true one
    name = name || '<Your name>' 
    console.log('hello ' + name);
}

greet('asif');
greet();

//if the parameter is 0, it will also return the true one
greet(0);
