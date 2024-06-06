const db=require('../database/models/index')
const db1=require('../db/data') //después lo borramos

let productController={
    index:function(req,res){
        return res.render('index',{
            data: db1.productos
        })
    },
    productos:function(req,res){
       return res.render('product',{
            data: db1.productos
        })
    },
    detalleProducto:function(req,res){
        return res.render('product-detail',{
            data: db1.productos
        })
    },
    agregarProducto:function(req,res){
        return res.render('product-add',{
            nombreUsuario: db1.usuario[1].email
        })
    },
    resultadoBusqueda:function(req,res){
        return res.render('search-results',{
            
        })
    }
}
module.exports = productController;