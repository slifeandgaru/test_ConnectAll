const userModel = require('../models/userModels')

function createUser(email, username, password, phone){
    console.log(userModel);
    return userModel.create({
        email : email,
        username : username,
        password : password,
        phone : phone
    })
}

module.exports = {
    createUser: createUser
}