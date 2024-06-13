const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const productController = require("../controllers/productController");
const db = require("../database/models");

const { body } = require("express-validator"); //para poder validar formularios

//===========  Validaciones  ===============//

let validationsRegister = [
  body("email")
    .notEmpty()
    .withMessage("campo email incompleto") //verifica que el campo no este vacío
    .isEmail()
    .withMessage("formato de email incorrecto") //verifica que sea un email válido
    .custom(function (value, { req }) {
      //Verifica que el email no exista previamente
      return db.Users.findOne({
        where: { email: req.body.email }, //podríamos usar email:value, pero es más canchero así porque ya pedí el {req}
      }).then(function (user) {          //value anda igual porque es literalmente el email. lo del req se usa en otros casos
        if (user) {
          throw new Error("El email ingresado ya existe.");
        }
      });
    }),
  body("usuario").notEmpty().withMessage("campo usuario incompleto"),
  body("contrasenia").notEmpty().withMessage("campo contraseña incompleto"),
  body("nro_documento").notEmpty().withMessage("DNI incompleto").isLength({ max: 15 }).withMessage("El DNI debe tener como máximo 15 caracteres"),
];
let validationsLogin = [
  body("email")
    .notEmpty()
    .withMessage("campo email incompleto") //verifica que el campo no este vacío
    .isEmail()
    .withMessage("formato de email incorrecto") //verifica que sea un email válido
    .custom(function (value, { req }) {
      //Verifica que el email no exista previamente
      return db.Users.findOne({
        where: { email: req.body.email }, //podríamos usar email:value, pero es más canchero así porque ya pedí el {req}
      }).then(function (user) {          //value anda igual porque es literalmente el email. lo del req se usa en otros casos
        if (user) {
          throw new Error("El email ingresado ya existe.");
        }
      });
    }),
  body("contrasenia").notEmpty().withMessage("campo contraseña incompleto"),
];
let validationsEditProfile = [
  body("email")
    .notEmpty()
    .withMessage("campo email incompleto") //verifica que el campo no este vacío
    .isEmail()
    .withMessage("formato de email incorrecto") //verifica que sea un email válido
    .custom(function (value, { req }) {
      //Verifica que el email no exista previamente
      return db.Users.findOne({
        where: { email: req.body.email }, //podríamos usar email:value, pero es más canchero así porque ya pedí el {req}
      }).then(function (user) {          //value anda igual porque es literalmente el email. lo del req se usa en otros casos
        if (user==user.email) {
          throw new Error('');
        }else{
          throw new Error("El email ingresado ya existe.");
        }
      });
    }),
  body("usuario").notEmpty().withMessage("campo usuario incompleto"),
  
  body("nro_documento").notEmpty().withMessage("DNI incompleto").isLength({ max: 15 }).withMessage("El DNI debe tener como máximo 15 caracteres"),
];

//============  Rutas  ============//

router.get("/", userController.perfil);
router.get("/editarPerfil", userController.editarPerfil);
router.post('/editarPerfilSend', validationsEditProfile, userController.profileEdit)
router.get("/registrarse", userController.registrarse); //mostrar el formulario
router.post("/newUser", validationsRegister, userController.register); //recibe el formulario
router.get("/iniciarSesion", userController.iniciarSesion); // mostrar formulario de login
router.post("/login", validationsLogin, userController.login); // recibe formulario de login
router.post("/logout", userController.logout);

module.exports = router;
