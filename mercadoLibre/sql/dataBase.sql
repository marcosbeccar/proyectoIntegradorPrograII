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
INSERT INTO tabla_de_usuario (id, email, contraseña, fecha, dni, foto_perfil, createdAT, updatedAt, deletedAt)
VALUES (DEFAULT, "pepitogomez@gmail.com", "pepito05", "21-03-04 00:00:00", 45576980, "/images/perfil_hombre.jpeg",  NULL, NULL, NULL); 

INSERT INTO tabla_de_usuario (id, email, contraseña, fecha, dni, foto_perfil, createdAT, updatedAt, deletedAt)
VALUES (DEFAULT, "carolinarodriguez@gmail.com", "carolina05", "17-05-09 00:00:00", 45768980, "/images/perfil_mujer.webp", NULL, NULL, NULL); 

INSERT INTO tabla_de_usuario (id, email, contraseña, fecha, dni, foto_perfil, createdAT, updatedAt, deletedAt)
VALUES (DEFAULT, "laurahernandez@gmail.com", "lauhern09", "09-08-10 00:00:00", 455767820, "/images/perfil_mujer_2.jpep", NULL, NULL, NULL); 

INSERT INTO tabla_de_usuario (id, email, contraseña, fecha, dni, foto_perfil, createdAT, updatedAt, deletedAt)
VALUES (DEFAULT, "oscarbeccar@gmail.com", "beccaroscar", "07-08-11 00:00:00", 455769823, "/images/perfil_hombre_2.jpeg", NULL, NULL, NULL); 

INSERT INTO tabla_de_usuario (id, email, contraseña, fecha, dni, foto_perfil, createdAT, updatedAt, deletedAt)
VALUES (DEFAULT, "alejandroperez@gmail.com", "aleperez99", "07-08-11 00:00:00", 45576980, "/images/perfil_himbre_3.jpeg", NULL, NULL, NULL); 

-- INSERTO POSTEOS
INSERT INTO tabla_productos (id, id_usuario, rutaImagen, nombreProducto, descripcionProducto, createdAT, updatedAt, deleteAt)
VALUES (DEFAULT, 1, "/images/labial-rojo.png", "labial rojo", "Contiene pigmentos, aceites, ceras y emolientes que dan color y textura a los labios.", NULL, NULL, NULL);
VALUES (DEFAULT, 2, "/images/m-pestaña.png", "mascara de pestaña ", "Producto cosmético que se aplica a las pestañas para agregar volumen, longitud, y definición, realzando así la mirada.", NULL, NULL, NULL);
VALUES (DEFAULT, 3, "/images/corrector-ojeras.png", "corrector de ojeras", "Producto cosmético diseñado para disimular las ojeras y las imperfecciones alrededor de los ojos.", NULL, NULL, NULL);
VALUES (DEFAULT, 4, "/images/nude.png", "labial nude", "Producto de maquillaje que se aplica en los labios para añadir color y brillo, proporcionando un aspecto sofisticado.", NULL, NULL, NULL);
VALUES (DEFAULT, 5, "/images/iluminador.png", "iluminador", "Cosmético diseñado para resaltar y dar luminosidad a ciertas áreas del rostro, como pómulos, puente de la nariz y arco de cupido.", NULL, NULL, NULL);
VALUES (DEFAULT, 1, "/images/gloss.jpeg", "gloss", "Producto cosmético que se aplica sobre los labios para darles un brillo luminoso y un aspecto jugoso.", NULL, NULL, NULL);
VALUES (DEFAULT, 2, "/images/base.png", "base", "Producto de maquillaje diseñado para crear una capa uniforme sobre la piel, proporcionando cobertura, corrigiendo imperfecciones.", NULL, NULL, NULL);
VALUES (DEFAULT, 3, "/images/delineador.png", "delineador de ojos", "Producto cosmético utilizado para resaltar y definir la forma de los ojos mediante líneas precisas y pigmentadas aplicadas a lo largo de la línea de las pestañas.", NULL, NULL, NULL);
VALUES (DEFAULT, 4, "/images/rugor.png", "rubor", "Producto de maquillaje en polvo, crema o líquido que se aplica en las mejillas para añadir un toque de color.", NULL, NULL, NULL);
VALUES (DEFAULT, 5, "/images/croncer.jpg", "broncer", "Producto de maquillaje diseñado para añadir un tono cálido y bronceado a la piel.", NULL, NULL, NULL);

-- INSERTO COMENTARIOS
INSERT INTO tabla_comentarios (id, id_usuario, id_producto, textoComentario, createdAT, updatedAt, deleteAt)
VALUES (DEFAULT, 3, 1, "Muy buen producto", NULL, NULL, NULL)
VALUES (DEFAULT, 4, 1, "Muy buen producto", NULL, NULL, NULL)
VALUES (DEFAULT, 5, 1, "Muy buen producto", NULL, NULL, NULL)
VALUES (DEFAULT, 4, 2, "Muy buen producto", NULL, NULL, NULL)
VALUES (DEFAULT, 5, 2, "Muy buen producto", NULL, NULL, NULL)
VALUES (DEFAULT, 1, 2, "Muy buen producto", NULL, NULL, NULL)
VALUES (DEFAULT, 2, 3, "Muy buen producto", NULL, NULL, NULL)
VALUES (DEFAULT, 3, 3, "Muy buen producto", NULL, NULL, NULL)
VALUES (DEFAULT, 4, 3, "Muy buen producto", NULL, NULL, NULL)
VALUES (DEFAULT, 5, 4, "Muy buen producto", NULL, NULL, NULL)
VALUES (DEFAULT, 1, 4, "Muy buen producto", NULL, NULL, NULL)
VALUES (DEFAULT, 2, 4, "Muy buen producto", NULL, NULL, NULL)
VALUES (DEFAULT, 3, 5, "Muy buen producto", NULL, NULL, NULL)
VALUES (DEFAULT, 4, 5, "Muy buen producto", NULL, NULL, NULL)
VALUES (DEFAULT, 5, 5, "Muy buen producto", NULL, NULL, NULL)
VALUES (DEFAULT, 1, 6, "Muy buen producto", NULL, NULL, NULL)
VALUES (DEFAULT, 2, 6, "Muy buen producto", NULL, NULL, NULL)
VALUES (DEFAULT, 3, 6, "Muy buen producto", NULL, NULL, NULL)
VALUES (DEFAULT, 4, 7, "Muy buen producto", NULL, NULL, NULL)
VALUES (DEFAULT, 5, 7, "Muy buen producto", NULL, NULL, NULL)
VALUES (DEFAULT, 1, 7, "Muy buen producto", NULL, NULL, NULL)
VALUES (DEFAULT, 2, 8, "Muy buen producto", NULL, NULL, NULL)
VALUES (DEFAULT, 3, 8, "Muy buen producto", NULL, NULL, NULL)
VALUES (DEFAULT, 4, 8, "Muy buen producto", NULL, NULL, NULL)
VALUES (DEFAULT, 5, 9, "Muy buen producto", NULL, NULL, NULL)
VALUES (DEFAULT, 1, 9, "Muy buen producto", NULL, NULL, NULL)
VALUES (DEFAULT, 2, 9, "Muy buen producto", NULL, NULL, NULL)
VALUES (DEFAULT, 3, 10, "Muy buen producto", NULL, NULL, NULL)
VALUES (DEFAULT, 4, 10, "Muy buen producto", NULL, NULL, NULL)
VALUES (DEFAULT, 5, 10, "Muy buen producto", NULL, NULL, NULL)
