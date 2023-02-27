const express = require('express');
const User = require('../model/user');

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const body = req?.body;
        const finderEmail = await User.findOne({email: body.email});

        if (body?.email && finderEmail)
            return res.status(409).send('E-mail já cadastrado');

        if (!body?.email)
            return res.status(400).send('Insira o email');

        const user = await User.create(body);

        return res.send({ user });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});

router.post('/singIn', async (req, res) => {
    try {
        const body = req?.body;
        const user = await User.findOne({email: body?.email});

        if (user == null)
            return res.status(404).send({ error: 'E-mail not found' });

        return res.status(200).send('Logged success!');        
    } catch (err) {
        return res.status(400).send({ error: 'sing-in failed' });
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