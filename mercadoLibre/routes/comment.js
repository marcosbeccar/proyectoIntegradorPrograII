const express = require("express")
const router = express.Router()
const commentController = require("../controllers/commentController")

router.get("/comentarios", commentController.comentarios);


module.exports = router;
