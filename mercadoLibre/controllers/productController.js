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

    resultadoBusqueda: function(req, res) {
        const query = req.query.q;
        
        if (!query) {
            return res.render('search-results', { productos: [], mensaje: "No hay resultados para su criterio de búsqueda" });
        }

        db.Product.findAll({
            where: {
                [db.Sequelize.Op.or]: [
                    { nombreProducto: { [db.Sequelize.Op.like]: `%${query}%` } },
                    { descripcionProducto: { [db.Sequelize.Op.like]: `%${query}%` } }
                ]
            },
            include: [{ model: db.User, as: 'usuario' }],
            order: [['created_at', 'DESC']]
        })
        .then(productos => {
            if (productos.length === 0) {
                return res.render('search-results', { productos: [], mensaje: "No hay resultados para su criterio de búsqueda" });
            }

            res.render('search-results', { productos, mensaje: null });
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Error interno del servidor');
        });
    }
    
}
module.exports = productController;