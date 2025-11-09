const jwt = require('jsonwebtoken');
const UnAuthorizedException = require('../exceptions/UnAuthorizedException');
const secret = 'kasnfi19r9f2f92f93r9f3j';

function generateToken(payload) {
    return jwt.sign(payload, secret, {
        // audience: 'app.todo-app.com',
        subject: 'auth',
        expiresIn: '1m',
        // issuer: 'api.todo-app.com',
    }
    );
}

function verifyToken(token) {
    try {
        const data = jwt.verify(token, secret);
        return data;
    } catch (error) {
        throw new UnAuthorizedException(error.message);
    }
}

module.exports = {
    generateToken,
    verifyToken,
}