const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer', ''); // First one replacing with second one
        // Validtaing the token
        const decoded = jwt.verify(token, 'Thisissecret');
        const user = await User.findOne({_id : decoded._id, 'tokens.token' : token}); // Find the user id and matches

        if (!user) {
            throw new Error();
        }

        req.user = user;
        next();
    } catch (e) {
        res.status(401).send({error : 'Please authentiacate.'});
    }
};

module.exports = auth;