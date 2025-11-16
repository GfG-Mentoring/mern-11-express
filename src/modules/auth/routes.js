const { Router } = require('express');
const { signup, login } = require('./service');
const BadRequestException = require('../../exceptions/BadRequestException');


const authRouter = Router();

authRouter.post('/login', async (req, res) => {
    const { email, password } = req.body ?? {};
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const data = await login(email, password);
        res.status(200).json({ message: 'Login successful', data });
    } catch (error) {
        if (error instanceof BadRequestException) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

authRouter.post('/signup', async (req, res) => {
    const { name, email, password } = req.body ?? {};

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Name, email and password are required' });
    }
    try {
        await signup(name, email, password);
    } catch (error) {
        if (error instanceof BadRequestException) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
    res.status(201).json({ message: 'User created successfully' });
})

module.exports = { authRouter };