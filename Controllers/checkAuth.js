const jwt = require('./jwt');

const checkAuth = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'Unauthorized. No token provided.' });

    try{
        const decodedToken = jwt.verifyToken(token)
        req.userId = decodedToken
        next()
    }catch(e) {
        console.error('Error while verifying token:', error);
        res.status(401).json({ message: 'Unauthorized. Invalid token.' });
    }
    
}

module.exports = {
    checkAuth,
};