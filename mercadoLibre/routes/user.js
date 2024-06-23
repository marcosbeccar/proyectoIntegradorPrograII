const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { body } = require("express-validator");
const db = require("../database/models");

//Validaciones
let validationsRegister = [
  body("email")
    .notEmpty().withMessage("Campo email incompleto")
    .isEmail().withMessage("Formato de email incorrecto")
    .isLength({ max: 60 }).withMessage('El email es muy largo')
    .custom(function (value, { req }) {
      return db.User.findOne({
        where: { email: req.body.email }
      }).then(function (user) {
        if (user) {
          throw new Error("El email ingresado ya existe.");
        }
      });
    }),
  body("usuario").notEmpty().withMessage("Campo usuario incompleto").isLength({ max: 99 }).withMessage('El usuario es muy largo'),
  body("contrasenia").notEmpty().withMessage("Campo contraseña incompleto"),
  body("nro_documento").notEmpty().withMessage("DNI incompleto").isLength({ max: 8 }).withMessage("El DNI debe tener como máximo 8 caracteres"),
];

let validationsLogin = [
  body("email")
    .notEmpty().withMessage("Campo email incompleto")
    .bail()
    .isEmail().withMessage("Ingrese un email correcto"),
  body("contrasenia").notEmpty().withMessage("Campo contraseña incompleto"),
];

let validationsEditProfile = [
  body("email")
  .notEmpty().withMessage("Campo email incompleto")
  .isEmail().withMessage("Formato de email incorrecto")
  .isLength({ max: 60 }).withMessage('El email es muy largo')
  .custom(function (value, { req }) {
    return db.User.findByPk(req.params.id)
      .then(function (currentUser) {
        if (currentUser && value !== currentUser.email) {
          return db.User.findOne({
            where: { email: value }
          }).then(function (otroUsuarioConElMismoEmail) {
            if (otroUsuarioConElMismoEmail) {
              throw new Error("El email ingresado ya existe.");
            }
          });
        }
      });
  }),

  body("usuario").notEmpty().withMessage("Campo usuario incompleto").isLength({ max: 99 }).withMessage('El usuario es muy largo'),
  body("dni").notEmpty().withMessage("Campo DNI incompleto").isLength({ max: 8 }).withMessage("El DNI debe tener como máximo 8 caracteres"),
  body("foto_perfil").notEmpty().withMessage('Campo foto de perfil incompleto')
];

function isLoggedIn(req, res, next) {
  if (req.cookies.userLogueado) {
    return next();
  }
  res.redirect('/user/iniciarSesion');
}

// Rutas
router.get("/registrarse", userController.registrarse); // Mostrar el formulario de registro
router.post("/newUser", validationsRegister, userController.register); // Recibe el formulario de registro
router.get("/iniciarSesion", userController.iniciarSesion); // Mostrar el formulario de login
router.post("/login", validationsLogin, userController.login); // Recibe el formulario de login
router.post("/logout", userController.logout); // Logout
//Rutas que dependen de algo (van a lo último porque sino se confunde el id con otra cosa)
router.get("/:id", userController.perfil); // Perfil de usuario
router.get("/editarPerfil/:id", userController.editarPerfil); // Formulario para editar perfil
router.post("/editarPerfilSend/:id", validationsEditProfile, userController.profileEdit); // Recibe el formulario de edición de perfil


module.exports = router;
