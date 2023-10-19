const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
const unprotectedRoutes = ['/api/verifyAccessCode', '/api/allRSVPs']

module.exports.authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (unprotectedRoutes.includes(req.path)) { // Skip authentication for exempt routes
        return next();
    }
    if (!token) {
        console.log("I am in the no access code in the auth token")
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
    jwt.verify(token, jwtSecret, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token.' });
        }
        req.user = user;
        next();
    });
};