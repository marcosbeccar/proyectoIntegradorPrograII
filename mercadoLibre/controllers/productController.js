const db=require('../database/models/index')
const db1=require('../db/data') //después lo borramos
const data = require('../database/models/product')

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
    productoAgregado:function(req, res){
        return res.render('product-add',{
            data: data // NO SE QUE HACER ACAAAAA
        })
    },
    resultadoBusqueda: function(req, res) {
        const query = req.query.q; //Extrae el valor del parámetro de consulta q de la solicitud HTTP y lo guarda en la variable query.
        
        if (!query) { //Lógica para la búsqueda cuando `query` está vacío
            return res.render('search-results', { productos: [], mensaje: "No hay resultados para su criterio de búsqueda" });
        }// Renderiza la vista 'search-results' con un mensaje de que no hay resultados.

        db.Product.findAll({ //Busca productos en la base de datos que coincidan con la consulta de búsqueda.
            where: {
                [db.Sequelize.Op.or]: [//Utilizamos OR para buscar productos cuyo nombre o descripción contengan la consulta.
                    { nombreProducto: { [db.Sequelize.Op.like]: `%${query}%` } }, //nombreProducto es el nombre del campo en la tabla Product que representa el nombre del producto
                    { descripcionProducto: { [db.Sequelize.Op.like]: `%${query}%` } } // descripcionProducto nombre del campo en la tabla Product que representa la descripción del producto.
                ] //Utilizamos el operador LIKE que es el equivalente en Sequelize del operador LIKE de SQL.
                // %${query}% contiene el término de búsqueda (query) rodeado por porcentajes (%), que representa cero o más caracteres --> busca cualquier registro donde contenga el valor de query 

            },
            include: [{ model: db.User, as: 'usuario' }], // Incluye el modelo 'User' (tabla intermedia) asociado a cada producto.
            order: [['created_at', 'DESC']] // Ordena los resultados por fecha de creación en orden descendente.
        })
        .then(productos => {
            if (productos.length === 0) {
                return res.render('search-results', { productos: [], mensaje: "No hay resultados para su criterio de búsqueda" });
            }//Si no se encontraron productos, renderiza la vista 'search-results' con un mensaje de que no hay resultados.

            res.render('search-results', { productos, mensaje: null }); //Si se encontraron productos, renderiza la vista 'search-results' con los productos encontrados.
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Error interno del servidor');
        });
    }
    
}
module.exports = productController;