require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndRemove('5db7482c55d6002d39a54b53').then((task) => {
    console.log(task);
    
    return Task.countDocuments({completed : false});
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
});