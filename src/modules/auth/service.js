const { hashPassword, verifyPassword } = require('../../utils/hashPasswords');
const { generateToken } = require('../../utils/jwt');
const { User } = require('./model');
const BadRequestException = require('../../exceptions/BadRequestException');

async function login(email, password) {
    // validate email and password
    if (!email || !password) {
        throw new BadRequestException('Email and password are required');
    }
    const user = await User.findOne({
        email
    });
    // check if user exists
    if (!user) {
        throw new BadRequestException('Invalid email. User not found.');
    }

    // if user exist, validate the password
    const isPasswordValid = verifyPassword(password, user.password);
    if (!isPasswordValid) {
        throw new BadRequestException('Invalid password. Please try again.');
    }

    const token = generateToken({ id: user.id });
    // if password is valid, generate a token
    // return the token
    return {
        token, user: {
            id: user.id,
            fullName: user.fullName,
            email: user.email,
        }
    };
}


async function signup(name, email, password) {
    // 1. validate name, email and password
    //    a.  name should be a string and max only 100 characters.
    //    b.  email should be a valid email address
    //    c.  password should be a strong password between 8-16 characters.
    // 2. check if user already exists
    // 3. if user does not exist, 
    // 4. create a new user with the given name,
    //     email and hashed password
    // 5. return the user  


    const user = await User.findOne({
        email
    });

    if (user) {
        throw new BadRequestException('User already exists. Please use a different email address.');
    }

    const hashedPassword = hashPassword(password);

    const newUser = new User({
        fullName: name,
        email,
        password: hashedPassword,
    });
    await newUser.save();
    return;
}

module.exports = {
    login,
    signup,
}