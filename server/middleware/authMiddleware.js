const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
const unprotectedRoutes = ['/api/verifyAccessCode', '/api/allRSVPs']
// const unprotectedRoutes = ['/api/verifyAccessCode', '/api/allRSVPs', '/api/RSVP']

module.exports.authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    console.log("token on server side " + token)
    if (unprotectedRoutes.includes(req.path)) { // Skip authentication for exempt routes
        return next();
    }
    if (!token) {
        console.log("No token provided in the request header")
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