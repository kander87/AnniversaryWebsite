const UserController = require('../controllers/userController');
// const { User } = require('../models/user.model');

module.exports = (app) => {
    app.post('/api/verifyAccessCode', UserController.verifyAccessCode)
    app.post('/api/rsvp', UserController.rsvp)
    // app.get('/api/getUser', UserController.getUser)
    // app.get('/api/allUsers', UserController.allUsers)
}
// app.post('/api/changeRSVP', UserController.changeRSVP)
// app.post('/api/login', UserController.login)
// app.get('/api/logout', UserController.logout)