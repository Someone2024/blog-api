const jwt = require('./jwtFunctions');
const User = require('../models/User');

exports.login = async (req, res) => {
    const {username, password} = req.body;

    try{
        const user = await User.findOne({username})

        if (!user) return res.status(404).json({ message: 'User not found.' });

        const matchPassword = await jwt.comparePasswords(password, user.password)

        if (!matchPassword) return res.status(401).json({ message: 'Invalid credentials.' });

        const token = jwt.generateToken({userId: user._id})

        res.json({token})
    }catch(e) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Failed to log in.' });
    }
}