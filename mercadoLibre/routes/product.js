const express = require("express")
const router = express.Router()
const productController = require("../controllers/productController")

router.get("/", productController.index); //después se podría borrar (adaptar la ruta en cada redirect)
router.get("/detalleProducto", productController.detalleProducto);
router.get("/agregarProducto", productController.agregarProducto);
router.post("/agregarProducto", productController.productoAgregado);
router.get("/resultadoBusqueda", productController.resultadoBusqueda);




module.exports = router;