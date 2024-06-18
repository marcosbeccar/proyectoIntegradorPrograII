const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { body } = require("express-validator");
const db = require("../database/models");

let validationsRegister = [
  body("email")
    .notEmpty().withMessage("campo email incompleto")
    .isEmail().withMessage("formato de email incorrecto")
    .custom(function (value, { req }) {
      return db.User.findOne({
        where: { email: req.body.email }
      }).then(function (user) {
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
    .notEmpty().withMessage("Campo email incompleto")
    .bail()
    .isEmail().withMessage("Ingrese un email correcto"),
  body("contrasenia").notEmpty().withMessage("Campo contraseña incompleto"),
];

let validationsEditProfile = [
  body("email")
    .notEmpty().withMessage("Campo email incompleto")
    .isEmail().withMessage("Formato de email incorrecto")
    .custom(function (value, { req }) {
      return db.User.findOne({
        where: { email: req.body.email }
      }).then(function (user) {
        if (user && user.email !== req.body.originalEmail) {
          throw new Error("El email ingresado ya existe.");
        }
      });
    }),
  body("usuario").notEmpty().withMessage("Campo usuario incompleto"),
  body("nro_documento").notEmpty().withMessage("DNI incompleto").isLength({ max: 15 }).withMessage("El DNI debe tener como máximo 15 caracteres"),
];

function isLoggedIn(req, res, next) {
  if (req.cookies.userLogueado) {
    return next();
  }
  res.redirect('/user/iniciarSesion');
}

router.get("/:id", userController.perfil);
router.get("/:id/editarPerfil", isLoggedIn, userController.editarPerfil);
router.post("/:id/editarPerfilSend", isLoggedIn, validationsEditProfile, userController.profileEdit);
router.get("/registrarse", userController.registrarse);
router.post("/newUser", validationsRegister, userController.register);
router.get("/iniciarSesion", userController.iniciarSesion);
router.post("/login", validationsLogin, userController.login);
router.post("/logout", userController.logout);

module.exports = router;
