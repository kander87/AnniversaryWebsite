const mongoose = require('mongoose')
//change schema name
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long"]
    }, 
    rsvp:{
        type: String, 
        required: [true, "RSVP is required"]
    },
    rsvpCount:{
        type: Number, 
        required: [true, "Number of Attendees is required (if not attending, please select 0)."]
    },
    notes:{
        type: String
    },
},{timestamps: true});

module.exports.User = mongoose.model("User", UserSchema);