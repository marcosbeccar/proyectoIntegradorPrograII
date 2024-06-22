const express = require("express")
const router = express.Router()
const commentController = require("../controllers/commentController")
const { body } = require("express-validator");

//Validaciones
let validationsComentarios = [
    body('comentario').notEmpty().withMessage('Debes completar este campo antes de enviar')
    .isLength({ min: 3 }).withMessage('El comentario debe ser más largo')
];

//Rutas
router.post('/:id', validationsComentarios, commentController.comentarios);


module.exports = router;
