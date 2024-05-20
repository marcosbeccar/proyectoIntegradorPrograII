module.exports = function(sequelize, dataTypes){

    let alias = "Comments"

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        id_usuario:{
            type: dataTypes.INTEGER,
        },
        id_producto:{
            type: dataTypes.INTEGER,
        },
        comentario:{
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
        tableName: "tabla_comentarios", //Nombre de la tabla en la base de datos
        timestamps: true,
        underscored: true
    }

    let Comment = sequelize.define(alias,cols,config)
    return Comment
}