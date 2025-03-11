const express = require("express")
const {handleToGenerateShortId} = require("../controllers/url.control")

const router = express.Router()

router.post("/", handleToGenerateShortId)

module.exports = router