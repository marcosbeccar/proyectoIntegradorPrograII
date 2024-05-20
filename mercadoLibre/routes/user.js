const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController");
const productController = require("../controllers/productController");

router.get("/", userController.perfil);
router.get("/editarPerfil", userController.editarPerfil);
router.get("/registrarse", userController.registrarse);
router.post("/create", userController.create)
router.get("/iniciarSesion", userController.iniciarSesion);


module.exports = router;
