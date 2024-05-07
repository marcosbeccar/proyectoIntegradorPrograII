const express = require("express")
const router = express.Router()
const productController = require("../controllers/productController")

router.get("/", productController.index);
router.get("/detalleProducto", productController.detalleProducto);
router.get("/agregarProducto", productController.agregarProducto);
router.get("/comentarios", productController.comentarios);

router.get("/resultadoBusqueda", productController.resultadoBusqueda);




module.exports = router;