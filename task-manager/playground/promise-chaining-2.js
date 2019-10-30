require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndRemove('5db7482c55d6002d39a54b53').then((task) => {
//     console.log(task);
    
//     return Task.countDocuments({completed : false});
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// });

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed : false});
    return count;
};

deleteTaskAndCount('5db748c0fb659c2d7c4b8620').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
});