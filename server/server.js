const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser")
const { authenticateToken } = require('./middleware/authMiddleware');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const port = 8000;
// require('dotenv').config()
// const cookieParser = require('cookie-parser')


const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials:true
}))
// app.use(express.json())
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(authenticateToken);

// app.use(cors())


// app.use(cookieParser())

require("./config/mongooseConfig");
require("./routes/userRoutes")(app); 

// Routes that require authentication
// app.use('/api/rsvp', authMiddleware);
// app.use('/theEvent', authMiddleware);
// app.use('/GettingThere', authMiddleware);
// app.use('/api/WhereToStay', authMiddleware);

app.get('/rsvp', authenticateToken, (req, res) => {
    // Access user object from req.user if needed
    console.log("checking authentication")
    const user = req.user;
    res.json({ message: 'Protected data retrieved successfully.', user });
});

// app.get('/api/rsvp/data', authenticateAccessCode, (req, res) => {
//     res.send('This route is protected by access code.');
// });

// app.get('/rsvp', authenticateAccessCode, (req, res) => {
//     res.send('This route is protected by access code.');
// });

app.get('/GettingThere', authenticateToken, (req, res) => {
    // Access user object from req.user if needed
    console.log("checking authentication")

    const user = req.user;
    res.json({ message: 'Protected data retrieved successfully.', user });
});

// app.get('/GettingThere', authenticateAccessCode, (req, res) => {
//     res.send('This route is protected by access code.');
// });

app.get('/TheEvent', authenticateToken, (req, res) => {
    // Access user object from req.user if needed
    console.log("checking authentication")

    const user = req.user;
    res.json({ message: 'Protected data retrieved successfully.', user });
});

// app.get('/TheEvent', authenticateAccessCode, (req, res) => {
//     res.send('This route is protected by access code.');
// });

app.get('/WhereToStay', authenticateToken, (req, res) => {
    // Access user object from req.user if needed
    console.log("checking authentication")

    const user = req.user;
    res.json({ message: 'Protected data retrieved successfully.', user });
});

// app.get('/WhereToStay', authenticateAccessCode, (req, res) => {
//     res.send('This route is protected by access code.');
// });


// must be at the bottom
app.listen(port, () => console.log(`Listening on port: ${port}`))