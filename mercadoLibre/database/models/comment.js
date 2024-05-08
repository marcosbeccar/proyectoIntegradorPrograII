module.exports = function(sequelize, dataTypes){

    let alias = "Comment"

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
        id_producto:{
            autoIncrement: true,
            primaryKey: true,
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
        tableName: "tabla_comentarios", //NO ENTIENDO ESTO
        timestamps: true,
        underscored: true

    }

    let Comment = sequelize.define(alias,cols,config)
    return Comment
}