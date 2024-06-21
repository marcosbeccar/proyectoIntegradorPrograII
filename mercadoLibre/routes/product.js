const express = require("express")
const router = express.Router()
const productController = require("../controllers/productController")
const { body } = require("express-validator");

//Validaciones
let validationsAgregarProducto = [
    body("rutaImagen").notEmpty().withMessage("Campo de imagen incompleto"),
    body("nombreProducto").notEmpty().withMessage("Campo de nombre del producto incompleto"),
    body("descripcionProducto").notEmpty().withMessage("Campo de descripción del producto incompleto")
];

router.get("/", productController.index); //después se podría borrar (adaptar la ruta en cada redirect)
router.get("/detalleProducto", productController.detalleProducto);
router.get("/agregarProducto", productController.agregarProducto);
router.post("/agregarProducto", validationsAgregarProducto, productController.productoAgregado);
router.get("/resultadoBusqueda", productController.resultadoBusqueda);




module.exports = router;