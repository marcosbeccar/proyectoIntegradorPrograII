const db=require('../database/models')
const db1=require('../db/data') //después lo borramos

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
    registrarse:function(req,res){ //solo sirve para mostrar la vista
        return res.render('register',{
            
        })
    },
    iniciarSesion:function(req,res){  //solo sirve para mostrar la vista
        return res.render('login',{
            
        })
    },
    register: function(req,res){
        let data= req.body
        
        db.Users.create({
            email: data.email,
            contrasenia: data.contrasenia,
            fecha: data.fecha_nacimiento,
            dni: data.nro_documento,
            foto_perfil: data.foto_perfil
        })
            .then(function(){
                return res.redirect('/')
            })
            .catch(err=>console.log(err))
    }

}
module.exports = userController;