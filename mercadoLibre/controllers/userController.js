const db = require("../database/models");
const db1 = require("../db/data"); //después lo borramos
let bcrypt = require("bcryptjs");
const { validationResult, cookie } = require("express-validator"); //pido las validaciones de la ruta
//se usa validationResult como palabra clave, no se puede poner otro nombre

let userController = {
  perfil: function (req, res) {
    

    return res.render("profile", {
      data: db.productos,
      usuario: req.cookies.userLogueado.usuario,
      foto_perfil: req.cookies.userLogueado.foto_perfil,
      email: req.cookies.userLogueado.email,
    });
  },
  editarPerfil: function (req, res) {
    return res.render("profile-edit", {
      nombreUsuario: db1.usuario[1].email,
    });
  },
  profileEdit:function(req,res){
    let errors = validationResult(req);
    if (errors.isEmpty()){
      let data=req.body;
      db.Users.update({
        email: data.email,
        //contrasenia: bcrypt.hashSync(data.contrasenia, 10),
        fecha: data.fecha_nacimiento,
        dni: data.nro_documento,
        foto_perfil: data.foto_perfil,
        usuario: data.usuario,
      })
    }
  },
  registrarse: function (req, res) {
    //solo sirve para mostrar la vista
    return res.render("register", {});
  },
  iniciarSesion: function (req, res) {
    if (req.cookies.userLogueado != undefined){
      res.send("No habilitado")
    } else {return res.render("login", {})}
  },
  register: function (req, res) {
    

    let errors = validationResult(req);
    if (errors.isEmpty()) { //una vez que no haya errores, mando los datos a la db
      let data = req.body;
      db.Users.create({
        email: data.email,
        contrasenia: bcrypt.hashSync(data.contrasenia, 10),
        fecha: data.fecha_nacimiento,
        dni: data.nro_documento,
        foto_perfil: data.foto_perfil,
        usuario: data.usuario,
      })
        .then(function () {
          return res.redirect("/");
        })
        .catch((err) => console.log(err));
    }else{
        return res.render("register", {errors: errors.array(), old: req.body}); //en el caso de que haya errores, renderizo de nuevo la vista y los mando.
                                    //se usa la propiedad errors y old (con old mando todos los datos que ingreso el usuario para que no los ponga de nuevo)
    }
  },
  login: function (req, res) {
    let data = req.body;

    db.Users.findOne({ where: { email: data.usuario } })

      .then(function (user) {
        if (!user) {
          return res.send("No se encontró");
        }

        if (bcrypt.compareSync(data.contrasenia, user.contrasenia)) {
          if (req.body.recordarme != undefined) {
            res.cookie("userLogueado", user, { maxAge: 1000 * 60 * 500 });   
          } else if (req.body.recordarme = 0) {
            req.session.userSession = user
          }
          return res.redirect("/");
        } else {
          return res.send("No coinciden contraseñas");
        }
      
      })

      .catch(function (error) {
        console.log(error);
      });
  },

  logout: function(req,res){
    req.session.user=null;
    res.clearCookie("userLogueado"); // Borra la cookie de usuario logueado
    res.redirect("/"); // Redirige a la página principal u otra página de tu elección
  }

}

module.exports = userController;
