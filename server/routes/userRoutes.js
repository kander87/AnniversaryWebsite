const UserController = require('../controllers/userController');
// const { User } = require('../models/user.model');
// const { authenticateToken } = require('../middleware/authMiddleware');


module.exports = (app) => {
    // app.post('/api/verifyAccessCode', UserController.verifyAccessCode)
    app.post('/api/rsvp', UserController.rsvp)
    // app.get('/api/AdminAllRSVPs', UserController.allRSVPs)
}
// app.post('/api/changeRSVP', UserController.changeRSVP)
// app.post('/api/login', UserController.login)
// app.get('/api/logout', UserController.logout)