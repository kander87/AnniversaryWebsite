const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser")
// const { authenticateToken } = require('./middleware/authMiddleware');
// const jwt = require('jsonwebtoken');
require('dotenv').config();
// const path = require('path')

// const _dirname = path.dirname("");
// const buildPath = path.join(_dirname , "../client/build");


const port = 8000;

const app = express();
// app.use(express.static(buildPath))

// app.get("/*", function(req,res){
//     res.sendFile(
//         path.join(_dirname, "../client/build/index.html"),
//         function(err){
//             if (err){
//                 res.status(500).send(err);
//             }
//         }
//     )
// });
app.use(cors());


// app.use(cors({
//     origin: 'http://localhost:3000',
//     credentials:true
// }))

// const corsOptions = {
//     origin: 'http://localhost:3000', // Replace with your frontend's URL
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
// };
// app.use(cors(corsOptions));


app.use(express.json(), express.urlencoded({ extended: true }));
app.use(bodyParser.json())
// app.use(authenticateToken);

require("./config/mongooseConfig");
require("./routes/userRoutes")(app); 

// app.get('/rsvp', authenticateToken, (req, res) => {// Access user object from req.user if needed
//     const user = req.user;
//     res.json({ message: 'Protected data retrieved successfully.', user });
// });

// app.post('api/rsvp', authenticateToken, (req, res) => {// Access user object from req.user if needed
//     const user = req.user;
//     res.json({ message: 'Protected data retrieved successfully.', user });
// });
// // app.post('/api/rsvp', (req, res) => {
// //     // Handle RSVP data
// //     // ...
// //     res.json({ message: 'RSVP data received successfully.' });
// // });


// app.get('/GettingThere', authenticateToken, (req, res) => {// Access user object from req.user if needed
//     const user = req.user;
//     res.json({ message: 'Protected data retrieved successfully.', user });
// });


// app.get('/TheEvent', authenticateToken, (req, res) => {// Access user object from req.user if needed
//     const user = req.user;
//     res.json({ message: 'Protected data retrieved successfully.', user });
// });

// app.get('/WhereToStay', authenticateToken, (req, res) => {// Access user object from req.user if needed
//     const user = req.user;
//     res.json({ message: 'Protected data retrieved successfully.', user });
// });


// must be at the bottom
app.listen(port, () => console.log(`Listening on port: ${port}`))