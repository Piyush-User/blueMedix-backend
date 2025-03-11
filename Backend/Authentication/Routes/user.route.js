const express = require("express")
const { handleSignUp, handleLogin } = require("../controllers/user.control")

const router = express.Router()

router.post("/signup", handleSignUp)
router.post("/login", handleLogin)

module.exports = router