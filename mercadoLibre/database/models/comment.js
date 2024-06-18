module.exports = function(sequelize, dataTypes) {
    let alias = "Comment";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        id_usuario: {
            type: dataTypes.INTEGER,
        },
        id_productos: {
            type: dataTypes.INTEGER,
        },
        comentario: {
            type: dataTypes.STRING,
        }
        
    };
    let config = {
        tableName: "tabla_comentarios",
        timestamps: true,
        underscored: true
    };
    let Comment = sequelize.define(alias, cols, config);

    //Asociaciones

    Comment.associate = function(models) {
        // Asociación con Productos
        Comment.belongsTo(models.Product, {
            foreignKey: 'id_productos',
            as: 'producto'
        });

        // Asociación con Usuarios
        Comment.belongsTo(models.User, {
            foreignKey: 'id_usuario',
            as: 'usuario'
        });
    };

    return Comment;
};
