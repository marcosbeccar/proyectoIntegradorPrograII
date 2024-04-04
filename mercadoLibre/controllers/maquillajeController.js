
let maquillajeController = {
    index:function(req,res){
        return res.render('indexx',{

        })
    },
    productos:function(req,res){
       return res.render('product',{
            
        })
    },
    detalleProducto:function(req,res){
        return res.render('??? creo que no hace falta, el detalle es el product con distinto id',{
            
        })
    },
    agregarProducto:function(req,res){
        return res.render('product-add',{
            
        })
    },
    comentarios:function(req,res){
        return res.render('???',{
            
        })
    }, 
    perfil:function(req,res){
        return res.render('profile',{
            
        })
    },
    editarPerfil:function(req,res){
        return res.render('profile-edit',{
            
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