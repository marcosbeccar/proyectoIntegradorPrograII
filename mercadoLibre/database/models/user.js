module.exports = function(sequelize, DataTypes) {
    let alias = "User";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        email: {
            type: DataTypes.STRING
        },
        contrasenia: {
            type: DataTypes.STRING
        },
        fecha: {
            type: DataTypes.DATE
        },
        dni: {
            type: DataTypes.INTEGER
        },
        foto_perfil: {
            type: DataTypes.STRING
        },
        usuario: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    };
    let config = {
        tableName: "tabla_de_usuarios",
        timestamps: true,
        underscored: true
    };
    let User = sequelize.define(alias, cols, config);

    //Asociaciones
    User.associate = function(models) {
        User.hasMany(models.Product, {
            foreignKey: 'id_usuario',
            as: 'productos'
        });
        User.hasMany(models.Comment, {
            foreignKey: 'id_usuario',
            as: 'comentarios'
        });
    };


    return User;
};
