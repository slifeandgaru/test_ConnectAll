const mongoose = require('../config/connectDB')

let userSchema = {
    email: String,
    username : String,
    password: String,
    phone: Number
}

let model = mongoose.model("user", userSchema)

module.exports = model