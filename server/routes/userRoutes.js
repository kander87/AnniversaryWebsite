const UserController = require('../controllers/userController');
// const { User } = require('../models/user.model');
const { authenticateToken } = require('../middleware/authMiddleware');


module.exports = (app) => {
    app.post('/api/verifyAccessCode', UserController.verifyAccessCode)
    // app.post('/api/rsvp', UserController.rsvp)
    app.post('/api/rsvp', authenticateToken, UserController.rsvp);
    app.get('/rsvp', authenticateToken, (req, res) => {
        // Access user object from req.user if needed
        console.log("checking authentication")
        const user = req.user;
        res.json({ message: 'Protected data retrieved successfully.', user });
    });
    // app.get('/api/getUser', UserController.getUser)
    // app.get('/api/allUsers', UserController.allUsers)
}
// app.post('/api/changeRSVP', UserController.changeRSVP)
// app.post('/api/login', UserController.login)
// app.get('/api/logout', UserController.logout)