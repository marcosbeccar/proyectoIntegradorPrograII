const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController");
const productController = require("../controllers/productController");

router.get("/", userController.perfil);
router.get("/editarPerfil", userController.editarPerfil);
router.get("/registrarse", userController.registrarse); //mostrar el formulario
router.post("/newUser", userController.register); //recibe el formulario
router.get("/iniciarSesion", userController.iniciarSesion); // mostrar formulario de login
router.post("/login", userController.login); // recibe formulario de login


module.exports = router;
