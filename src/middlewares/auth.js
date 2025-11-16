const { verifyToken } = require("../utils/jwt");
const { User } = require("../modules/auth/model");

async function authMiddleware(req, res, next) {

    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Authorization token is required' });
    }

    const [tokenType, tokenValue] = token.split(' ');

    console.log({ tokenType, tokenValue });

    switch (tokenType) {
        case 'Bearer':
            const decoded = verifyToken(tokenValue);
            const user = await User.findById(decoded.id);
            if (!user) {
                return res.status(401).json({ message: 'Invalid token' });
            }
            req.user = user;
            next();
            return;
        default:
            return res.status(401).json({ message: 'Invalid token type' });
    }
}

module.exports = authMiddleware;