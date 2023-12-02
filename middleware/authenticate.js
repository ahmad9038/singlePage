const jwt = require('jsonwebtoken')
const User = require('../models/userSchema')
require('dotenv').config();

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });
        if (!rootUser) {
            throw new Error('User not Found');
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id;
        next();

    } catch (error) {
        res.status(401).send('unauthorized');
        console.log(error);
    }
}

module.exports = authenticate