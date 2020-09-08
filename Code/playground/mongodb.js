// CRUD Operation
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database.');
    }

    const db = client.db(databaseName);

    //----------------------------------------------------------------------------------------------------------------//
    // Insert
    //----------------------------------------------------------------------------------------------------------------//
    db.collection('users').insertOne({
        _id: id,
        name: 'Linus',
        age: 25
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert user.');
        }
        console.log(result.ops);
    });

    db.collection('tasks').insertMany([
        {
            description: 'Javascript',
            completed: true
        }, {
            description: 'Node.js',
            completed: false
        }, {
            description: 'Mongodb',
            completed: false
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert documents.');
        }
        console.log(result.ops);
    });

    //----------------------------------------------------------------------------------------------------------------//
    // Read
    //----------------------------------------------------------------------------------------------------------------//

    db.collection('users').findOne({ name: 'Teag', age: 1 }, (error, user) => {
        if (error) {
            return console.log('Unable to fetch.');
        }
        console.log(user);
    });

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        console.log(tasks);
    });

    db.collection('tasks').find({ _id: new ObjectID("5db01861b11b702374ecec8a") }).toArray((error, tasks) => {
        console.log(tasks);
    });

    //----------------------------------------------------------------------------------------------------------------//
    // Update
    //----------------------------------------------------------------------------------------------------------------//

    db.collection('users').updateOne({
        _id: new ObjectID("5db012f003bcfa20a8342afc")
    }, {
        $inc: {
            age: 1
        }
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });

    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });

    //----------------------------------------------------------------------------------------------------------------//
    // Delete
    //----------------------------------------------------------------------------------------------------------------//

    db.collection('users').deleteMany({
        age: 25
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });

    db.collection('tasks').deleteMany({
        description: 'JavaScript'
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });
});