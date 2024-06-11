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
            foto_perfil: data.foto_perfil,
            usuario: data.usuario
        })
            .then(function(){
                return res.redirect('/')
            })
            .catch(err=>console.log(err))
    }, 
    login: function(req,res){
       let data= req.body
       
        db.Users.findOne({ where: { email: data.usuario } })
        
            .then(function(user){
                res.send(user)
                if (!user){
                    return res.send("No se encontro");
                }
               
                if (bcrypt.compareSync(data.contrasenia, user.contrasenia)){
                    if (req.body.recordarme != undefined && data.recordarme){
                    res.cookie("user", user,  {maxAge: 1000*60*500})
                    }
                    return res.redirect('/')   
                } else{
                    return res.send("No coinciden contraseñas");
                }
            })

        .catch(function(error){
        console.log(error)
        })
       
    }

}
module.exports = userController;