const express = require('express')
const mongoose = require('mongoose')

const router  = express.Router()

const User  = require('../models/User.model')

/*Routes */

//Get - Reads all tasks

router.get("/users", (req, res)=>{
    User.find()
    .then((allUsers) => res.json (allUsers))
    .catch((error)=>res.json(error))
})

//Get - Reads one user

router.get("/users/:userId", (req, res)=>{
    const {userId} = req.params;
    User.findById(userId)
    .then((allUsers) => res.json (allUsers))
    .catch((error)=>res.json(error))
})

//Put - Updates one user
router.put("/users/:userId", (req, res)=>{
    const {userId} = req.params;
    const {name, password, email, image} = req.body;

    User.findByIdAndUpdate(userId, {name, password, email, image}, {new: true})
    .then(()=>{
        res.json({message: "User Updated"})
    })
    .catch ((error)=>{
        res.json({message: "Error: User not updated"})
    })
})

//Delete - Deletes one specific task -> include navigate to signup page. 
router.delete("/users/:userId", (req, res)=>{
    const {userId} = req.params;
    User.findByIdAndDelete(userId)
    .then(()=>{
        res.json({message: "User deleted"})
    })
    .catch((error)=>{
        res.json({message: "User could not be deleted"})
    })
})

module.exports = router;