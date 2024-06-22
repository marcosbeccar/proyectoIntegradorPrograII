module.exports = function(sequelize, DataTypes) { 
    let alias = "Comment";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        id_usuario: {
            type: DataTypes.INTEGER,
        },
        id_productos: {
            type: DataTypes.INTEGER,
        },
        comentario: {
            type: DataTypes.STRING,
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
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
