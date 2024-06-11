module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        email: {
            type: dataTypes.STRING,
        },
        contrasenia: {
            type: dataTypes.STRING,
        },
        fecha: {
            type: dataTypes.DATE,
        },
        dni: {
            type: dataTypes.INTEGER,
        },
        foto_perfil: {
            type: dataTypes.STRING,
        },
        usuario:{
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "tabla_de_usuarios",
        timestamps: true,
        underscored: true
    };
    let User = sequelize.define(alias, cols, config);
    return User;
};
