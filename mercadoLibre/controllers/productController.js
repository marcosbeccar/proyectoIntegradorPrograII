const db=require('../database/models')
const { validationResult, cookie } = require("express-validator"); //pido las validaciones de la ruta
//se usa validationResult como palabra clave, no se puede poner otro nombre

let productController={
    index:function(req,res){
        
        db.Product.findAll({
            order: [['createdAt', 'DESC']], // Ordena por fecha de creación de forma descendente
            limit: 12, // Limita a los 10 productos más recientes
            include: [{ model: db.User, as: 'usuario' }] // Incluye la información del usuario que publicó el producto
        })
        .then(productos => {
            res.render('index', {
                productos // Pasa los productos a la vista
            });
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Error interno del servidor');
        });
    

    },
    productos:function(req,res){
       return res.render('product',{
            data: db.productos
        })
    },
    detalleProducto:function(req,res){
        const productId = Number(req.params.id);
        
        db.Product.findByPk(productId, {
                include: [{
                    model: db.User,
                    as: 'usuario'
                }, {
                    model: db.Comment, // Incluye el modelo de comentarios
                    as: 'comentarios', // Utiliza el alias que definiste en la asociación del modelo de productos
                    include: [{
                        model: db.User,
                        as: 'usuario' // Incluye el usuario asociado a cada comentario
                    }]
                }]
            })
            .then(producto => {
                if (!producto) {
                    return res.render('error', {
                        message: 'Producto no encontrado'
                    });
                } else {
                    res.render('product-detail', {
                        producto: producto, // Asegúrate de que 'producto' está definido
                        userSession1: req.session.userSession, // Asegúrate de que 'userSession' está definido
                        cookies1: req.cookies.userLogueado, // Asegúrate de que 'cookies' está definido
                        id: producto.id_usuario
                    });
                }
            })
            .catch(error => {
                console.error(error);
                res.status(500).send('Error interno del servidor');
            });
  


    },

    agregarProducto:function(req,res){
        return res.render('product-add',{})
    },

    productoAgregado:function(req, res){
        let errors = validationResult(req);
        if (errors.isEmpty()) {
        let form = req.body;

        db.Product.create({
        rutaImagen: form.rutaImagen,
        nombreProducto: form.nombreProducto,
        descripcionProducto: form.descripcionProducto,
        created_at: new Date(),
        updated_at: new Date(),
        id_usuario: form.id
        })
        .then(function(result) {
            return res.redirect("/product"); // Redirige a la página de productos después de agregar un producto
        })
        .catch(function(error) {
            console.log(error); 
            return res.status(500).send("Hubo un error al agregar el producto"); // Envía una respuesta de error al cliente
        });
        } else {
            return res.render("product-add", { errors: errors.array(), old: req.body });
        }
  },


    resultadoBusqueda: function(req, res) {
        const query = req.query.q; //Extraemos el valor del parámetro de consulta q de la solicitud HTTP y lo guardamos en la variable query.
        
        if (!query) { //Hacemos la lógica para la búsqueda cuando `query` está vacío
            return res.render('search-results', { productos: [], mensaje: "No hay resultados para su criterio de búsqueda" });
        }// Renderiza la vista 'search-results' con un mensaje de que no hay resultados.

        db.Product.findAll({ //Buscamos productos en la base de datos que coincidan con la consulta de búsqueda.
            where: {
                [db.Sequelize.Op.or]: [//Usamos OR para buscar productos cuyo nombre o descripción contengan la consulta.
                    { nombreProducto: { [db.Sequelize.Op.like]: `%${query}%` } }, //nombreProducto es el nombre del campo en la tabla Product que representa el nombre del producto
                    { descripcionProducto: { [db.Sequelize.Op.like]: `%${query}%` } } // descripcionProducto es el nombre del campo en la tabla Product que representa la descripción del producto.
                ] //Usamos el operador LIKE que es el equivalente en Sequelize del operador LIKE de SQL.
                // %${query}% contiene el término de búsqueda (query) rodeado por (%), que representa cero o más caracteres --> esto busca cualquier registro donde contenga el valor de query 

            },
            include: [{ model: db.User, as: 'usuario' }], // Incluimos el modelo 'User' (tabla intermedia) asociado a cada producto.
            order: [['created_at', 'DESC']] // Ordenamos los resultados por fecha de creación en orden descendente (entonces los productos más nuevos aparecerán arriba)
        })
        .then(function (productos){
            if (productos.length === 0) {
                return res.render('search-results', { 
                    productos: [], 
                    mensaje: "No hay resultados para su criterio de búsqueda" });
            }//Si no se encontraron productos, renderiza la vista 'search-results' con un mensaje de que no hay resultados.

            res.render('search-results', { 
                productos, 
                mensaje: null }); //Si se encontraron productos, renderiza la vista 'search-results' con los productos encontrados.
        })
        .catch(function(error){
            console.error(error);
            res.status(500).send('Error interno del servidor');
        });
    },
    editarProducto: function(req, res){
        const userId = Number(req.params.userId);
        const productId = Number(req.params.productId);
    
        db.Product.findByPk(productId, {
            include: [{ model: db.User, as: 'usuario' }]
        })
        .then(function(product) {
            if (!product) {
                return res.render('error', { 
                    message: 'Producto no encontrado' });
            }
            
            if (product.id_usuario !== userId) {
                return res.status(403).send("No tienes permiso para editar este producto");
            }
            res.render('product-edit', { 
                producto: product,});
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Error interno del servidor');
        });

    },
    productoEditado: function(req, res){
        let errors = validationResult(req);
        if (errors.isEmpty()) {
        let form = req.body;
        const productId = Number(req.params.productId);
        const userId = Number(req.params.userId);
        
        db.Product.update({
        rutaImagen: form.rutaImagen,
        nombreProducto: form.nombreProducto,
        descripcionProducto: form.descripcionProducto,
        updated_at: new Date(), 
        },{
             where: { id: productId}
        })
        .then(function(result) {
            return res.redirect(`/product/detalleProducto/${productId}`); // Redirige a la página de productos después de editar el producto
        })
        .catch(function(error) {
            console.log(error); 
            return res.status(500).send("Hubo un error al editar el producto"); // Envía una respuesta de error al cliente
        });
        } else { //DATOS ANTERIORES
            const userId = Number(req.params.userId);
            const productId = Number(req.params.productId);
        
            db.Product.findByPk(productId, {
                include: [{ model: db.User, as: 'usuario' }]
            })
            .then(function(product) {
                if (!product) {
                    return res.render('error', { message: 'Producto no encontrado' });
                }
                
                if (product.id_usuario !== userId) {
                    return res.status(403).send("No tienes permiso para editar este producto");
                }
                res.render('product-edit', { producto: product, errors: errors.array(), old: req.body });
            })
            .catch(function(error){
                console.error(error);
                res.status(500).send('Error interno del servidor');
            });
            }
      },

      eliminarProducto: function(req,res){
        const productId = Number(req.params.id);// Convertimos el id del producto de la URL a un número
        // Obtenemos el id del usuario logueado desde las cookies o la sesión utilizando un operador ternario:
        
        let userId; //creamos la variable

        // Obtenemos el id del usuario logueado desde las cookies o la sesión
        if (req.cookies.userLogueado) {
            userId = req.cookies.userLogueado.id;
        } else if (req.session.userSession) {
            userId = req.session.userSession.id;
        } else {
            userId = null;
        }
    
        // Verificamoa si el usuario logueado está identificado
        if (!userId) {
            return res.status(403).send("Usuario no logueado");
        }

        db.Product.findByPk(productId)
            .then(producto => {
                if (!producto) {
                    return res.render('error', { message: 'Producto no encontrado' });
                }
                if (producto.id_usuario !== userId) {
                    return res.status(403).send("No tienes permiso para eliminar este producto");
                }

                return db.Product.destroy({ where: { id: productId } });
            })
            .then(function(){
                res.redirect('/'); // Redirigimos a la página principal después de eliminar el producto
            })
            .catch(function(error){
                console.error(error);
                res.status(500).send('Error interno del servidor');
            });
        }
    }

module.exports = productController;