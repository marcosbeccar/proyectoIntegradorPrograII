module.exports = function(sequelize, DataTypes) {
    let alias = "Product";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        id_usuario: {
            type: DataTypes.INTEGER,
        },
        rutaImagen: {
            type: DataTypes.STRING,
            field: 'rutaImagen'
        },
        nombreProducto: {
            type: DataTypes.STRING,
            field: 'nombreProducto'
        },
        descripcionProducto: {
            type: DataTypes.STRING,
            field: 'descripcionProducto'
        }
    };
    let config = {
        tableName: "tabla_productos",
        timestamps: true,
        underscored: true
    };
    let Product = sequelize.define(alias, cols, config);

    //Asociaciones
    Product.associate = function(models) {
        Product.belongsTo(models.User, {
            foreignKey: 'id_usuario',
            as: 'usuario'
        });
        Product.hasMany(models.Comment, {
            foreignKey: 'id_producto',
            as: 'comentarios'
        });
    };


    return Product;
};
