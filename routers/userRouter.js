const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');


//POST Create new user into users collection
router.post("/signup", (req, res) => {
    const {username, password, firstName, lastName, contactEmail} = req.body;
    bcrypt.hash(password, 10)
    .then((hashedPassword) => {
         User.create({username, password: hashedPassword, firstName, lastName, contactEmail})
        .then((data) => res.json(data))
        .catch((e) => res.sendStatus(500))
    })
    .catch((e) => res.sendStatus(500))
});
//POST request for user login
router.post("/login", (req, res) => {
    const {username, password} = req.body;
    User.findOne({username})
    .then((user) => {
        if(!user){
            return res.status(404).send("Invalid credentials")
        } else {
            res.json(user)
        }
    })
    .catch((e) => console.log(e))
})
//GET request for retrieving user data 
router.get("/userinfo", (req,res) => {
    User.find({})
    .then((data) => res.json(data))
    .catch((e) => console.log(e))
})
module.exports = router;