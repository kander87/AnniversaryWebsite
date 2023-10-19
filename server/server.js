const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser")
const { authenticateToken } = require('./middleware/authMiddleware');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const port = 8000;

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials:true
}))
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(authenticateToken);

require("./config/mongooseConfig");
require("./routes/userRoutes")(app); 

app.get('/rsvp', authenticateToken, (req, res) => {// Access user object from req.user if needed
    console.log("checking authentication")
    const user = req.user;
    res.json({ message: 'Protected data retrieved successfully.', user });
});


app.get('/GettingThere', authenticateToken, (req, res) => {// Access user object from req.user if needed
    console.log("checking authentication")
    const user = req.user;
    res.json({ message: 'Protected data retrieved successfully.', user });
});


app.get('/TheEvent', authenticateToken, (req, res) => {// Access user object from req.user if needed
    console.log("checking authentication")
    const user = req.user;
    res.json({ message: 'Protected data retrieved successfully.', user });
});

app.get('/WhereToStay', authenticateToken, (req, res) => {// Access user object from req.user if needed
    console.log("checking authentication")
    const user = req.user;
    res.json({ message: 'Protected data retrieved successfully.', user });
});


// must be at the bottom
app.listen(port, () => console.log(`Listening on port: ${port}`))