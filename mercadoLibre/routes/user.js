const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")

router.get("/", userController.perfil);
router.get("/editarPerfil", userController.editarPerfil);
router.get("/registrarse", userController.registrarse);
router.get("/iniciarSesion", userController.iniciarSesion);

module.exports = router;
