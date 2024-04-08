CREATE SCHEMA proyectoIntegrador;

USE proyectoIntegrador;


CREATE TABLE tabla_de_usuario (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL,
    contraseña VARCHAR(50) NOT NULL,
    fecha VARCHAR(50) NOT NULL,
    dni INT UNIQUE NOT NULL,
    foto_perfil VARCHAR(50) NOT NULL,
    createdAt TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP 
);

CREATE TABLE tabla_productos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT UNSIGNED,
    rutaImagen VARCHAR(50) NOT NULL,
    nombreProducto VARCHAR(50) NOT NULL,
    descripcionProducto VARCHAR(50) NOT NULL,
    createdAt TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (id_usuario) REFERENCES tabla_de_usuario(id)
);

CREATE TABLE tabla_comentarios(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT UNSIGNED,
    id_productos INT UNSIGNED,
    comentario VARCHAR(300),
    createdAt TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (id_usuario) REFERENCES tabla_de_usuario(id),
    FOREIGN KEY (id_productos) REFERENCES tabla_productos(id)
);

-- INSERTO USUARIOS 
INSERT INTO tabla_de_usuario (id, email, contraseña, fecha, dni, foto_perfil, createdAT, updatedAt, deleteAt)
VALUES (DEFAULT, "pepitogomez@gmail.com", "pepito05", "21-03-04 00:00:00", NULL, NULL, NULL); 

INSERT INTO tabla_de_usuario (id, email, contraseña, fecha, dni, foto_perfil, createdAT, updatedAt, deleteAt)
VALUES (DEFAULT, "carolinarodriguez@gmail.com", "carolina05", "17-05-09 00:00:00", NULL, NULL, NULL); 

INSERT INTO tabla_de_usuario (id, email, contraseña, fecha, dni, foto_perfil, createdAT, updatedAt, deleteAt)
VALUES (DEFAULT, "laurahernandez@gmail.com", "lauhern09", "09-08-10 00:00:00", NULL, NULL, NULL); 

INSERT INTO tabla_de_usuario (id, email, contraseña, fecha, dni, foto_perfil, createdAT, updatedAt, deleteAt)
VALUES (DEFAULT, "oscarbeccar@gmail.com", "beccaroscar", "07-08-11 00:00:00", NULL, NULL, NULL); 

INSERT INTO tabla_de_usuario (id, email, contraseña, fecha, dni, foto_perfil, createdAT, updatedAt, deleteAt)
VALUES (DEFAULT, "alejandroperez@gmail.com", "aleperez99", "07-08-11 00:00:00", NULL, NULL, NULL); 

-- INSERTO POSTEOS
INSERT INTO tabla_productos (id, id_usuario, rutaImagen, nombreProducto, descripcionProducto, createdAT, updatedAt, deleteAt)
VALUES (DEFAULT, 1, "https://i.pinimg.com/236x/2f/97/f0/2f97f05b32547f54ef1bdf99cd207c90.jpg", "labial", "Contiene pigmentos, aceites, ceras y emolientes que dan color y textura a los labios", NULL, NULL, NULL);
