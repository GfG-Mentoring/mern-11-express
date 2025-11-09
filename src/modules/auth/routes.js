const { Router } = require('express');
const { signup, login } = require('./service');
const BadRequestException = require('../../exceptions/BadRequestException');


const authRouter = Router();

authRouter.post('/login', (req, res) => {
    const { email, password } = req.body ?? {};
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const data = login(email, password);
        res.status(200).json({ message: 'Login successful', data });
    } catch (error) {
        if (error instanceof BadRequestException) {
            return res.status(error.status).json({ message: error.message });
        }
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

authRouter.post('/signup', (req, res) => {
    const { name, email, password } = req.body ?? {};

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Name, email and password are required' });
    }
    signup(name, email, password);
    res.status(201).json({ message: 'User created successfully' });
})

module.exports = { authRouter };