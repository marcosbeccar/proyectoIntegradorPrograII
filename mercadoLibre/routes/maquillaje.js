const express = require("express")
const router = express.Router()
const maquillajeController = require("../controllers/maquillajeController")

router.get("/", maquillajeController.index)



module.exports = router;