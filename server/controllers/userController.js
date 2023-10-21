const { model } = require('mongoose');
const { User } = require('../models/userModel')
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
require('dotenv').config();
// const realCode = process.env.ACCESS_CODE;
// const jwtSecret = process.env.JWT_SECRET;


// module.exports.verifyAccessCode = (req, res) => {
//     const { accessCode } = req.body;
//     if (!accessCode) {
//         return res.status(401).json({ message: 'Access denied. No access code provided.' });
//     }
//     try {
//         if (accessCode=== realCode) {
//             const token = jwt.sign({ accessCode }, jwtSecret);
//             console.log("token in the user controller "+ token)
//             return res.json({ token, msg: 'Access code verified successfully.' });
//         } else {
//             return res.status(401).json({ message: 'Invalid access code.' });
//         }
//     } catch (error) {
//         return res.status(401).json({ message: 'Invalid access code.' });
//     }
// };


module.exports.rsvp=(req,res) => {
    // const token = req.header('Authorization');
    // console.log('Received token:', token);
    User.create(req.body)
    .then(user => {
        console.log("RSVP successfully made")
            res.json({ msg: "success!", user: user, id:user._id, firstName: user.firstName });
        })
        .catch(err => {
            console.log("in err" + err)
            res.status(400).json(err);
        })
    }
    
    // module.exports.getUser = (req,res) => {
    //     User.findOne({_id: id})
    //     .then(oneUser => res.json(oneUser))
    //     .catch(err => res.status(500).json(err))
    // }
    
    // module.exports.allRSVPs = (req, res) => {
    //     User.find()
    //     .then((rsvps) => {
    //         res.json(rsvps)
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