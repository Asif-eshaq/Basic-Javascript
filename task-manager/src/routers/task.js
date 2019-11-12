const express = require('express');
const Task = require('../models/task');
const auth = require('../middleware/auth');
const router = new express.Router();

// Task 
router.post('/tasks', auth, async (req, res) => {
    const task = new Task({
        ...req.body,
        owner : req.user._id
    });

    try {
        await task.save();
        res.status(201).send(task);
    } catch (e) {
        res.status(400).send(e);
    }
});


// Query
// GEt /tasks?completed=true/false
router.get('/tasks', auth, async (req, res) => {
    const match = {}

    if (req.query.completed) {
        match.completed = req.query.completed === 'true'
    }

    try {
        // const tasks = await Task.find({owner : req.user._id});

        await req.user.populate({
            path : 'tasks',
            match
        }).execPopulate();

        res.send(req.user.tasks);
    } catch (e) {
        res.status(500).send(e);
    }
});

// Get tasks by id
router.get('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id;

    try {
        const task = await Task.findOne({_id, owner : req.user._id});

        if(!task) {
            return res.status(404).send();
        }

        res.send(task);
    } catch (e) {
        res.status(500).send();
    }
});

// Updating task
router.patch('/tasks/:id', auth, async (req, res) => {
    // for invalid update
    const updates = Object.keys(req.body);
    const allowedUpdates = ['description', 'completed'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({'Error' : 'Invalid updates'});
    }

    // for updating
    try {
        const task = await Task.findOne({_id : req.params.id, owner : req.user._id});

        if (!task) {
            return res.status(404).send();
        }

        // Dynamic update
        updates.forEach((update) => task[update] = req.body[update]);
        await task.save();

        res.send(task);
    } catch (e) {
        res.status(400).send(e);
    }
});

// Delete task
router.delete('/tasks/:id', auth, async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({_id : req.params.id, owner :req.user._id});
        
        if (!task) {
            return res.status(404).send();
        }

        res.send(task);
    } catch (e) {
        res.status(500).send(e);
    }
})

module.exports = router;