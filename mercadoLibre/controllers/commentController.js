const db=require('../database/models/index')


let commentController = {
    comentarios:function(req,res){
        return res.render('product-detail',{
            data: db.productos
        })
    }
    
}

module.exports = commentController;