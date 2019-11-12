const express = require('express');
const chalk = require('chalk');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// register a middleware; runs between a request coming the server and rout handler running
// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('Get request are disabled!');
//     } else {
//         next();
//     }
// });

// app.use((req, res, next) => {
//     res.status(503).send("Site is currently down. Please try after sometime!");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log(chalk.green.inverse.bold('Server is up on port ' + port));
});

// Hasing the password and matching it
// const bcrypt = require('bcryptjs');
// const myFunction = async () => {
//     const password = '12345red';
//     const hashPassword = await bcrypt.hash(password, 8);
//     console.log(password);
//     console.log(hashPassword);    
//     const isMatch = await bcrypt.compare('12345red', hashPassword);
//     console.log(isMatch);  
// };

// jeson web token
// const jwt = require('jsonwebtoken');
// const myFunction = async () => {
//     const token = jwt.sign({_id : 'abc123'}, 'this is mynew course!', {expiresIn : '7 days'});
//     console.log(token);
//     const data = jwt.verify(token, 'this is mynew course!');
//     console.log(data);
// };
// myFunction();

// manipulating the object
// const pet = {
//     name : 'Kutta'
// };
// pet.toJSON = function () {
//     return {};
// };
// console.log(JSON.stringify(pet));


// user task relation
// const Task = require('./models/task');
// const User = require('./models/user');

// const main = async () => {
//     // const task = await Task.findById('5dc8a4969b485024fcb1ad55');
//     // await task.populate('owner').execPopulate(); // populate = allow us to populate data from a relationship, execPopulate 
//     // console.log(task.owner);
//     const user = await User.findById('5dc8b7622b3d9c30bf42b217');
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks);    
// };
// main();