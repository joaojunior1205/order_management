const express = require('express');
const User = require('../model/user');

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const user = await User.create(req.body);

        return res.send({ user });
    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Registration failed' });
    }
});

router.get('/user', async (req,res) => {
    try {
        const user = await User.find();

        return res.send({user});
    } catch (err) {
        return res.status(400).send({ error: 'Get failed'});
    }
});

module.exports = app => app.use('/auth', router);