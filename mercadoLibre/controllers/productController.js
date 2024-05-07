const db=require('../database/models/index')

let productController={
    index:function(req,res){
        return res.render('index',{
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
    resultadoBusqueda:function(req,res){
        return res.render('search-results',{
            
        })
    }
}
module.exports = productController;