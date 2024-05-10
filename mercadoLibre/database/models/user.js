module.exports = function(sequelize, dataTypes){

    let alias = "Users"

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        email:{
            type: dataTypes.STRING,
        },
        contraseña:{
            type: dataTypes.STRING,
        },
        fecha:{
            type: dataTypes.STRING,
        },
        dni:{
            type: dataTypes.INTEGER,
        },
        foto_perfil:{
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
        tableName: "tabla_de_usuarios", //Nombre de la tabla en la base de datos
        timestamps: true,
        underscored: true

    }

    let User = sequelize.define(alias,cols,config)
    return User
}
