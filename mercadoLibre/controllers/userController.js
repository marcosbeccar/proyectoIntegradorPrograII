const db = require("../database/models");
let bcrypt = require("bcryptjs");
const { validationResult, cookie } = require("express-validator"); //pido las validaciones de la ruta
//se usa validationResult como palabra clave, no se puede poner otro nombre

let userController = {
  perfil: function (req, res) {
    const userId = req.params.id; // accede al valor del parámetro id especificado en la URL.
  
    //Consulta en la base de datos:
    db.User.findByPk(userId, {
        include: [{
            model: db.Product,  //le digo de que modelo sacar la asociación
            as: 'productos', // ahora 'productos' son los productos que coincidan con el usuario buscado
            order: [['createdAt', 'DESC']] // Ordena cronológicamente
        }]
    })

    //El resultado de la consulta se pasa a la función .then(), 
    //donde user es la variable que contiene este resultado
    .then(user => {
        if (!user) {
            return res.status(404).send("Usuario no encontrado");
        }

        const productos = user.productos; //acá uso el nombre que le puse en el as:
        const totalProductos = productos.length;

        //Los detalles del usuario y los productos asociados se pasan a la vista profile para renderizar
        return res.render("profile", {
            usuario: user.usuario,
            foto_perfil: user.foto_perfil,
            email: user.email,
            productos: productos,
            totalProductos: totalProductos,
            id: user.id
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).send("Error interno del servidor");
    });
},


editarPerfil: function (req, res) {
  const userId = Number(req.params.id); //lo convierto a número, porque viene como string
  
  if (
    (!req.cookies.userLogueado || req.cookies.userLogueado.id !== userId) &&
    (!req.session.userSession || req.session.userSession.id !== userId)
  ) {
    return res.status(403).send("No tienes permiso para editar este perfil");
  }

  db.User.findByPk(userId)
    .then(user => {
      if (!user) {
        return res.status(404).send("El usuario no existe o no fue encontrado");
      }
      
      return res.render("profile-edit", {
        id: user.id,
        email: user.email,
        usuario: user.usuario,
        foto_perfil: user.foto_perfil,
        dni: user.dni,
        fecha: user.fecha,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send("Error interno del servidor");
    });
},

profileEdit: function (req, res) {
  let errors = validationResult(req);
  const userId = req.params.id;

  if (!errors.isEmpty()) {
    // Si hay errores, buscar al usuario por su ID para tener los datos originales
    db.User.findByPk(userId)
      .then(user => {
        if (!user) {
          return res.status(404).send("El usuario no existe o no fue encontrado");
        }

        // Renderizar nuevamente el formulario con los datos originales (y errores)
        return res.render("profile-edit", {
          id: user.id,
          errors: errors.array(),
          email: user.email,
          usuario: user.usuario,
          foto_perfil: user.foto_perfil,
          dni: user.dni,
          fecha: user.fecha
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).send("Error interno del servidor");
      });
  } else {
    // Si no hay errores, actualizo los datos del usuario en la base de datos
    let data = req.body;
    let valores = {
      email: data.email,
      fecha: data.fecha_nacimiento,
      dni: data.dni,
      foto_perfil: data.foto_perfil,
      usuario: data.usuario,
    };

    // Solo si se modificó la contraseña
    if (data.contrasenia) {
      bcrypt.hash(data.contrasenia, 10)
        .then(hashedPassword => {
          // Append al diccionario de valores (me gustaba mas Python como te diste cuenta?)
          valores.contrasenia = hashedPassword;

          db.User.update(valores, {
            where: { id: userId }
          })
            .then(() => {
              res.redirect(`/user/${userId}`);
            })
            .catch(err => {
              console.log(err);
              res.status(500).send("Error interno del servidor");
            });
        });
    } else {
      // Si no se cambió la contraseña, actualizo como viene
      db.User.update(valores, {
        where: { id: userId }
      })
        .then(() => {
          res.redirect(`/user/${userId}`);
        })
        .catch(err => {
          console.log(err);
          res.status(500).send("Error interno del servidor");
        });
    }
  }
},

  registrarse: function (req, res) {
    //solo sirve para mostrar la vista
    if (req.cookies.userLogueado || req.session.userSession) {
      return res.status(404).send("Ya estas registrado");
    } else {return res.render("register", {})}
  },
  
  iniciarSesion: function (req, res) {
    if (req.cookies.userLogueado){
      return res.status(404).send("Ya iniciaste sesión");
    } else {return res.render("login", {})}
  },

  register: function (req, res) {
    let errors = validationResult(req);
    if (errors.isEmpty()) { //una vez que no haya errores, mando los datos a la db

      let data = req.body;
      db.User.create({
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
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      let data = req.body;
  
      db.User.findOne({ where: { email: data.email } })
        .then(function (user) {
          if (!user) {
            return res.send("No se encontró");
          }
  
          if (bcrypt.compareSync(data.contrasenia, user.contrasenia)) {
            if (req.body.recordarme !== undefined) {
              res.cookie("userLogueado", user, { maxAge: 1000 * 60 * 500 });
            } else {
              req.session.userSession = user;
            }
            return res.redirect("/");
          } else {
            return res.send("No coinciden contraseñas");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      return res.render("login", { errors: errors.array(), old: req.body });
    }
  },
  

  logout: function(req, res) {
    req.session.destroy(function(error) {
        if (error) {
            console.log(error); //Si hay un error, se imprime en la consola.
        }
        res.clearCookie("userLogueado"); // Borramos la cookie de usuario logueado
        res.redirect("/"); // Redirigimos a la página principal
    });
  }

}

module.exports = userController;
