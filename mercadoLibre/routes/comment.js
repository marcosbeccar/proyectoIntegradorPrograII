const express = require("express")
const router = express.Router()
const commentController = require("../controllers/commentController")

router.get("/", commentController.comentarios);


module.exports = router;
