const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser")

const port = 8000;
// require('dotenv').config()
// const cookieParser = require('cookie-parser')


const app = express();
app.use(express.json(), express.urlencoded({ extended: true }));
// app.use(cors())
app.use(cors({
    // credentials:true,
    origiin: 'http://localhost:3000'
}))

app.use(bodyParser.json())

app.use(express.json())
// app.use(cookieParser())

require("./config/mongooseConfig");
require("./routes/userRoutes")(app); 

// must be at the bottom
app.listen(port, () => console.log(`Listening on port: ${port}`))