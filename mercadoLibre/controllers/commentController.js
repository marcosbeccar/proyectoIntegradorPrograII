const db=require('../database/models')
const db1=require('../db/data') //después lo borramos
const { validationResult, cookie } = require("express-validator"); //pido las validaciones de la ruta
//se usa validationResult como palabra clave, no se puede poner otro nombre


let commentController = {
    comentarios: function(req,res){
        productId= Number(req.params.id);
        let errors = validationResult(req);
    if (errors.isEmpty()) { //una vez que no haya errores, mando los datos a la db
        const userId = req.cookies.userLogueado ? req.cookies.userLogueado.id : req.session.userSession.id;
        db.Comment.create({
            id_usuario: userId,
            id_productos: productId,
            comentario: req.body.comentario
        })
      .then((nada) => {
        res.redirect(`/product/detalleProducto/${productId}`);
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Error interno del servidor');
      });

    }else {
        // Copio los datos de antes (detalleProducto) //
        const productId = Number(req.params.id);
    
        db.Product.findByPk(productId, {
            include: [{
                model: db.User,
                as: 'usuario'
            }, {
                model: db.Comment,
                as: 'comentarios',
                include: [{
                    model: db.User,
                    as: 'usuario',
                }]
            }] //en vez de mostrar los más nuevos primero con order:, en este caso es más fácil invertir el array en la vista
            
        })
        .then(producto => {
            if (!producto) {
                return res.render('error', {
                    message: 'Producto no encontrado'
                });
            } else {
                res.render('product-detail', { //además de los datos que necesita, le paso los errores
                    producto: producto,
                    errors: errors.array(),
                    old: req.body
                });
            }
        })
        .catch(e => {
            console.error(e);
            res.status(500).send('Error interno del servidor');
        });
    }
    
},
    
}

module.exports = commentController;