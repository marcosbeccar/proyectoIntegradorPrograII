module.exports = function(sequelize, dataTypes) {
    let alias = "Products";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        id_usuario: {
            type: dataTypes.INTEGER,
        },
        rutaImagen: {
            type: dataTypes.STRING,
        },
        nombreProducto: {
            type: dataTypes.STRING,
        },
        descripcionProducto: {
            type: dataTypes.STRING,
        }
    };
    let config = {
        tableName: "tabla_productos",
        timestamps: true,
        underscored: true
    };
    let Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.User, {
            foreignKey: 'id_usuario',
            as: 'usuario'
        });
    };

    return Product;
};
