const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth');
const router = new express.Router();

// User
router.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({user, token}); // sends as objects   
    } catch (e) {
        res.status(400).send(e);
    }
});

// User login
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.send({user : user, token});
    } catch (e) {
        res.status(400).send();
    }
});

// Logout
router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;
        });
        await req.user.save();

        res.send();
    } catch (e) {
        res.status(500).send();
    }
});

// Logout all
router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = [];
        await req.user.save();

        res.send();
    } catch (e) {
        res.status(501).send();
    }
});


// Query
router.get('/users/me', auth, async (req, res) => {
    res.send(req.user);
});

// Get users by id
// router.get('/users/:id', async (req, res) => {
//     const _id = req.params.id;

//     try {
//         const user = await User.findById(_id);
//         if(!user) {
//             return res.status(404).send();
//         }
//         res.send(user);
//     } catch (e) {
//         res.status(500).send(e);
//     }
// });

// Updating user
router.patch('/users/me', auth, async (req, res) => {

    // Code for invalid update
    const updates = Object.keys(req.body);
    const allowrdUpdates = ['name', 'email', 'password', 'age'];
    const isValidOperation = updates.every((update) => allowrdUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({'Error' : 'Invalid updates!'});
    }
    // Code for updating a data
    try {
        // const user = await User.findById(req.params.id);

        // Dynamic update
        updates.forEach((update) => req.user[update] = req.body[update]);
        await req.user.save();

        // if(!user) {
        //     return res.status(404).send();
        // }

        res.send(req.user);
    } catch (e) {
        res.status(400).send(e);
    }
});

// Delete user
router.delete('/users/me', auth, async (req, res) => {
    try {
        // const user = await User.findByIdAndDelete(req.user._id);

        // if (!user) {
        //     return res.status(404).send();
        // }

        await req.user.remove();
        res.send(req.user);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;