const db=require('../database/models/index')


let maquillajeController = {
    index:function(req,res){
        return res.render('indexx',{
            data: db.productos
        })
    },
    productos:function(req,res){
       return res.render('product',{
            data: db.productos
        })
    },
    detalleProducto:function(req,res){
        return res.render('product-detail',{
            data: db.productos
        })
    },
    agregarProducto:function(req,res){
        return res.render('product-add',{
            nombreUsuario: db.usuario[1].email
        })
    },
    comentarios:function(req,res){
        return res.render('???',{
            
        })
    }, 
    perfil:function(req,res){
        return res.render('profile',{
            data: db.productos,
            nombreUsuario: db.usuario[1].email,
            fotoPerfil: db.usuario[1].foto_perfil
        })
    },
    editarPerfil:function(req,res){
        return res.render('profile-edit',{
            nombreUsuario: db.usuario[1].email
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
    resultadoBusqueda:function(req,res){
        return res.render('search-results',{
            
        })
    }
}







module.exports = maquillajeController;