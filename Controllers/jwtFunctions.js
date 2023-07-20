const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config(); 
const JWT_SECRET = process.env.JWT_SECRET;

const generateToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, {expiresIn: "1h"}) 
}

const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET)
}

const hashPassword = async (password)=> {
    return await bcrypt.hash(password, 10)
}

const comparePasswords = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword)
}

module.exports = {
    generateToken,
    verifyToken,
    hashPassword,
    comparePasswords,
};