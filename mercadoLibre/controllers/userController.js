const db=require('../database/models');
const db1=require('../db/data'); //después lo borramos
let bcrypt=require('bcryptjs');

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
            contrasenia: bcrypt.hashSync(data.contrasenia, 10),
            fecha: data.fecha_nacimiento,
            dni: data.nro_documento,
            foto_perfil: data.foto_perfil
        })
            .then(function(){
                return res.redirect('/')
            })
            .catch(err=>console.log(err))
    }, 
    login: function(req,res){
       let data= req.body
        .then(function(info){
        let user = db.Users.findOne({ where: { email: data.usuario } });
        //let password = db.Users.findOne({ where: { contrasenia: data.contrasenia } });
            if (!user){
                return res.render('login', { message: 'Usuario no encontrado' });
            } 
        
            if (user.contrasenia == data.contrasenia){
                return res.redirect('/')   
            } else{
                return res.render('login', { message: 'Incorrecto, por favor intente de nuevo.' });
            }
       })
       .catch(function(error){
        console.log(error)
       })
       
    }

}
module.exports = userController;