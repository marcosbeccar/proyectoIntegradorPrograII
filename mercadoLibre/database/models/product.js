module.exports = function(sequelize, dataTypes){

    let alias = "Product"

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        id_usuario:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        rutaImagen:{
            type: dataTypes.STRING,
        },
        nombreProducto:{
            type: dataTypes.STRING,
        },
        descripcionProducto:{
            type: dataTypes.STRING,
        },
        createdAt:{
            type: dataTypes.DATE,
        },
        updatedAt:{
            type: dataTypes.DATE,
        },
        deletedAt:{
            type: dataTypes.DATE,
        },
    }

    let config = {
        tableName: "tabla_productos", //NO ENTIENDO ESTO
        timestamps: true,
        underscored: true

    }

    let Product = sequelize.define(alias,cols,config)
    return Product
}