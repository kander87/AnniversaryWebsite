const { model } = require('mongoose');
const { User } = require('../models/userModel')
const bcrypt = require('bcrypt');



module.exports.verifyAccessCode = async (req,res) => {
    const { accessCode } = req.body;
    const realCode = "A&C50!"
    if (accessCode == realCode) {
        console.log("Codes match");
        return res.json({msg: "Access code verified successfully."})
    } else {
        console.log("Codes do not match");
        return res.status(401).json({ message: 'Invalid access code.' });
    }
};



module.exports.rsvp=(req,res) => {
    User.create(req.body)
    .then(user => {
        console.log("RSVP successfully made")
            res.json({ msg: "success!", user: user, id:user._id, firstName: user.firstName });
        })
        .catch(err => {
            console.log("in err" + err)
            res.status(400).json(err);
            // res.status(400).json({ errors: err.errors });

        })
    }
    
    // module.exports.getUser = (req,res) => {
    //     User.findOne({_id: id})
    //     .then(oneUser => res.json(oneUser))
    //     .catch(err => res.status(500).json(err))
    // }
    
    // module.exports.allUsers = (req, res) => {
    //     User.find()
    //     .then((users) => {
    //         res.json(users)
    //     })
    //     .catch((err) => {
    //         res.json({ message: 'Something went all wrong', error: err })
    //     });
    // }
    
    
    // module.exports.changeRSVP = (req, res) => {
    //     User.findOneAndUpdate(
    //         { _id: req.params.id },
    //         req.body,
    //         { new: true, runValidators: true }
    //     )
    //         .then(updatedUser => {
    //             res.json({user: updatedUser})
    //         })
    //         .catch((err) => {
    //             res.status(400).json(err)
    //         });
    // }