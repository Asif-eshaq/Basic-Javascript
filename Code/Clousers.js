// Part 1
function greet(WhatToSay) {

    return function(name) {
        console.log(WhatToSay + ' ' + name);
    }
}

greet('Hi')('Jack');

var sayHi = greet('Hola');
sayHi('Eric');

//-------------------------------------------//

// Part 2
function buildFunction() {
    var arr = [];

    for(var i = 0; i < 3; i++) {
        arr.push(function(){
            console.log(i);
        }
        )
    }
    return arr;
}

var func = buildFunction();

func[0]();
func[1]();
func[2]();

//------------------------------------------//

function buildFunction2() {
    var arr = [];

    for(var i = 0; i < 3; i++) {
        let j = 1;
        arr.push(function(){
            console.log(j);
        }
        )
    }
    return arr;
}

var func2 = buildFunction2();

func2[0]();
func2[1]();
func2[2]();

//---------------------------------------------//

function buildFunction3() {
    var arr = [];

    for(var i = 0; i < 3; i++) {
        arr.push((function(j){
                return function() {
                    console.log(j);
                }
            }(i))
        )
    }
    return arr;
}

var func3 = buildFunction3();

func3[0]();
func3[1]();
func3[2]();
