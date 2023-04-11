const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secret = process.env.MY_SECRET;

const generateToken = (data) => {
    return jwt.sign(data, secret, {expiresIn: '1800s'});
}

//POST Create new user into users collection
router.post("/signup", (req, res) => {
    const {username, password, firstName, lastName, contactEmail} = req.body;
    if(!username || !password || !firstName || !lastName || !contactEmail) {
        return res.status(400).json({message: 'Incomplete information submitted'})
    }
    bcrypt.hash(password, 10)
    .then((hashedPassword) => {
         User.create({username, password: hashedPassword, firstName, lastName, contactEmail})
        .then((data) => res.json(data))
        .catch((e) => res.sendStatus(500))
    })
    .catch((e) => res.sendStatus(500));
});
//POST request for user login
router.post("/login", (req, res) => {
    const {username, password} = req.body;
    User.findOne({username})
    .then((user) => {
        if(!user){
            return res.status(404).send("Invalid credentials")
        } 
        bcrypt.compare(password, user.password)
            .then((validPassword) => {
                if(!validPassword){
                    return res.status(404).send('Invalid credentials')
                }
                const token = generateToken({username: user.username})
                const id = user.id;
                const name = user.firstName
            res.json({token, id, name})
            console.log(user.id)
            })
        })
        .catch((e) => console.log(e))
})
//GET request for retrieving specific user data 
    router.get("/userinfo", (req,res) => {
        User.find({})
        .then((data) => res.json(data))
        .catch((e) => console.log(e))
})
module.exports = router;