module.exports = function(sequelize, dataTypes) {
    let alias = "Comments";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        id_usuario: {
            type: dataTypes.INTEGER,
        },
        id_producto: {
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
    return Comment;
};
