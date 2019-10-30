const express = require('express');
const User = require('../models/user');
const router = new express.Router();

// User
router.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.status(201).send(user);    
    } catch (e) {
        res.status(400).send(e);
    }
});


// Query
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (e) {
        res.status(500).send(e);
    }
});

// Get users by id
router.get('/users/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const user = await User.findById(_id);
        if(!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (e) {
        res.status(500).send(e);
    }
});

// Updating user
router.patch('/users/:id', async (req, res) => {

    // Code for invalid update
    const updates = Object.keys(req.body);
    const allowrdUpdates = ['name', 'email', 'password', 'age'];
    const isValidOperation = updates.every((update) => allowrdUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({'Error' : 'Invalid updates!'});
    }
    // Code for updating a data
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new : true, runValidators : true});

        if(!user) {
            return res.status(404).send();
        }

        res.send(user);
    } catch (e) {
        res.status(400).send(e);
    }
});

// Delete user
router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).send();
        }

        res.send(user);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;