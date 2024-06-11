const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController");
const productController = require("../controllers/productController");

const { body } = require("express-validator")

router.get("/", userController.perfil);
router.get("/editarPerfil", userController.editarPerfil);
router.get("/registrarse", userController.registrarse); //mostrar el formulario

let validations = [
    body("email") 
        .notEmpty() //verifica que el campo no este vacío
        .isEmail() //verifica que sea un email válido
        .custom(function(value, {req}){ //Verifica que el email no exista previamente
            db.Users.findOne({
                where: {email: req.body.email}, //usamos el atributo value del campo como imput 
            })
            .then(function(user){
                if(user){
                    throw new Error("El email ingresado ya existe.");
                }
            })
        })
]


router.post("/newUser", userController.register); //recibe el formulario
router.get("/iniciarSesion", userController.iniciarSesion); // mostrar formulario de login
router.post("/login", userController.login); // recibe formulario de login




module.exports = router;
