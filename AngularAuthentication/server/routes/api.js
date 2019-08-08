const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const User = require('../models/user');     // added this line..

// Create a connection to the database
const mongoose = require('mongoose');
const db = "mongodb://localhost:27017/CrudDB";
mongoose.connect(db, (err)=>{
    if(err){
        console.log('Error! '+err)
    }else{
        console.log('Connection Successful');
    }
})


function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload){
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
}


router.get('/', (req, res)=>{
    res.send('From API route'); 
})

router.post('/register', (req, res)=>{
    // Coming data from front-end input field
    // Simply extract user information from the user body..
    let userData = req.body;

    // Import User model from models/user.js file
    // user data has to be convert into userModel that  mongoose can understand
    let user = new User(userData);
    user.save((error, registerUser)=>{
        if(error){
            console.log('Error! '+error)
        }else{
            // Generate a json web token and pass it an an Object
            let payload = { subject: registerUser._id }
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({ token })
        }
    })  
})


router.post('/login', (req, res)=>{
    let userData = req.body;

    User.findOne({email: userData.email}, (error, userInfo)=>{
        if(error){
            console.log('login error !'+error);
        }else{
            if(!userInfo){
                res.status(401).send('Invalid Email')
            }else{
                if(userInfo.password !== userData.password){
                    res.status(401).send('Invalid Password');
                }else{
                    // Generate a json web token and pass it an an Object
                    let payload = { subject: userInfo._id }
                    let token = jwt.sign(payload, 'secretKey')
                    res.status(200).send({ token })
                }
            }
        }
    })
})

router.get('/regular', (req, res) => {
    let events = [
        {
            "id": "1",
            "name": "Rehan Sk",
            "post": "Angular Developer"
        },
        {
            "id": "2",
            "name": "Rehan Sk",
            "post": "Angular Developer"
        },
        {
            "id": "3",
            "name": "Rehan Sk",
            "post": "Angular Developer"
        },
        {
            "id": "4",
            "name": "Rehan Sk",
            "post": "Angular Developer"
        },
        {
            "id": "5",
            "name": "Rehan Sk",
            "post": "Angular Developer"
        },
        {
            "id": "6",
            "name": "Rehan Sk",
            "post": "Angular Developer"
        }
    ]
    res.json(events);
})

router.get('/special', verifyToken ,(req, res) => {
    let events = [
        {
            "id": "1",
            "name": "Rehan Sk",
            "post": "Angular Developer"
        },
        {
            "id": "2",
            "name": "Rehan Sk",
            "post": "Angular Developer"
        },
        {
            "id": "3",
            "name": "Rehan Sk",
            "post": "Angular Developer"
        },
        {
            "id": "4",
            "name": "Rehan Sk",
            "post": "Angular Developer"
        },
        {
            "id": "5",
            "name": "Rehan Sk",
            "post": "Angular Developer"
        },
        {
            "id": "6",
            "name": "Rehan Sk",
            "post": "Angular Developer"
        }
    ]
    res.json(events);
})


module.exports = router;