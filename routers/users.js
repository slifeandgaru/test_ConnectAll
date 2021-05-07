const express = require('express');
const router = express.Router();

const userServices = require('../services/userServices')

router.post("/", function(req, res){
    var email = req.body.email
    var username = req.body.username
    var password = req.body.password
    var phone = Number(req.body.phone)
    
    if(phone)
    userServices.createUser(email, username, password, phone)
    .then(function(data){
        res.json("Create successfully");
    }).catch(function(err){
        res.json("Create user fail")
    })
})

module.exports = router;