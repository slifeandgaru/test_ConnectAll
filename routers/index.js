const express = require('express')
const router = express.Router()
const path = require('path')

//router sẽ chỉ đến API bên users
const user = require("./users")

//url ở ajax sex chỉ đến router.use này
router.use("/user", user)

//router này để chạy file html đầu tiên
router.get('/create',(req,res) => {
    res.sendFile(path.join(__dirname,"../views/index.html"))
})

module.exports = router