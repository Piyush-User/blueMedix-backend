const express = require('express')
const registerUser = require('../controllers/registerUser')
const loginUser = require('../controllers/loginUser')


const router = express.Router()

//create user api or register user
router.post("/register", registerUser)
//login user
router.post("/login", loginUser)




module.exports = router