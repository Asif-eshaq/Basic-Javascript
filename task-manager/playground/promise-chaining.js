require('../src/db/mongoose');
const User = require('../src/models/user');

// 5db413b04b1aa217d5cc967b

User.findByIdAndUpdate('5db413b04b1aa217d5cc967b', {age : 1}).then((user) => {
    console.log(user);
    return User.countDocuments({age : 1});
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
});