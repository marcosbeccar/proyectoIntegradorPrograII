const db=require('../database/models/index')
const db1=require('../db/data') //después lo borramos


let commentController = {
    comentarios:function(req,res){
        return res.render('product-detail',{
            data: db1.productos
        })
    }
    
}

module.exports = commentController;