// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/anniversarydb', {//change database name here
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => console.log('Established a connection to the database'))
//     .catch(err => console.log('Something went wrong when connecting to the database ', err));

const mongoose = require("mongoose");
const DATABASE_URL = process.env.DATABASE_URL;

mongoose
  .connect(DATABASE_URL, {
    //change database name here
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Established a connection to the database"))
  .catch((err) =>
    console.log("Something went wrong when connecting to the database ", err)
  );