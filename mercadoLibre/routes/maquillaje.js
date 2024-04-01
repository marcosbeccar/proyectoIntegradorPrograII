const express = require("express")
const router = express.Router()
const maquillajeController = require("../controllers/maquillajeController")

router.get("/", maquillajeController.index);
router.get("/productos", maquillajeController.productos);
router.get("/detalleProducto", maquillajeController.detalleProducto);
router.get("/agregarProducto", maquillajeController.agregarProducto);
router.get("/comentarios", maquillajeController.comentarios);
router.get("/perfil", maquillajeController.perfil);
router.get("/editarPerfil", maquillajeController.editarPerfil);
router.get("/registrarse", maquillajeController.registrarse);
router.get("/iniciarSesion", maquillajeController.iniciarSesion);
router.get("/resultadoBusqueda", maquillajeController.resultadoBusqueda);




module.exports = router;