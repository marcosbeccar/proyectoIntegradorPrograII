const db=require('../database/models/index')
const db1=require('../db/data')

let userController={
    perfil:function(req,res){
        return res.render('profile',{
            data: db.productos,
            nombreUsuario: db1.usuario[1].email,
            fotoPerfil: db1.usuario[1].foto_perfil
        })
    },
    editarPerfil:function(req,res){
        return res.render('profile-edit',{
            nombreUsuario: db1.usuario[1].email
        })
    },
    registrarse:function(req,res){
        return res.render('register',{
            
        })
    },
    iniciarSesion:function(req,res){
        return res.render('login',{
            
        })
    },
    create: function(req,res){
        let usuarioLogueado = req.body; 
        db1.tabla_de_usuario.create(usuarioLogueado)
        .then(function(result){
            return res.redirect("/user")
        })
    }

}
module.exports = userController;