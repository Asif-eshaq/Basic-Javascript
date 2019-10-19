//const square = function(x) {
//    return x * x;
//}

// Arrow Function
//const square = (x) => {
//    return x * x;
//}

// New arrow function (short hand syntax)
//const square = (x) => x * x;
//console.log(square(4));


const event = {
    name : 'Birthday Party',
    guestList : ['Jack', 'Putin', 'Osama', 'Trump'],

    // Arrow function doesnt work with this, Es6 method definition syntax
    printGuestList() {
        console.log(('Guest list for ' + this.name));
        
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
        })
    }
};

event.printGuestList();