--versión corregida :) copien y peguen esto

CREATE SCHEMA proyectoIntegrador3;

USE proyectoIntegrador3;

CREATE TABLE tabla_de_usuarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(60) NOT NULL,
    contrasenia VARCHAR(400) NOT NULL,  
    fecha DATE NOT NULL,
    dni INT UNIQUE NOT NULL,
    foto_perfil VARCHAR(300) NOT NULL,
    usuario VARCHAR(100) NOT NULL,  
    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE tabla_productos (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT UNSIGNED,
    rutaImagen VARCHAR(300) NOT NULL,  
    nombreProducto VARCHAR(50) NOT NULL,
    descripcionProducto VARCHAR(300) NOT NULL,  
    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES tabla_de_usuarios(id)
);

CREATE TABLE tabla_comentarios(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT UNSIGNED,
    id_productos INT UNSIGNED,
    comentario VARCHAR(300),
    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES tabla_de_usuarios(id),
    FOREIGN KEY (id_productos) REFERENCES tabla_productos(id)
);


-- INSERTO USUARIOS 
INSERT INTO tabla_de_usuarios (email, contrasenia, fecha, dni, foto_perfil, usuario)
VALUES ("pepitogomez@gmail.com", "pepito05", "2004-03-21", 45576980, "perfil_hombre.jpeg", "Pepito");

INSERT INTO tabla_de_usuarios (email, contrasenia, fecha, dni, foto_perfil, usuario)
VALUES ("carolinarodriguez@gmail.com", "carolina05", "2009-05-17", 45768980, "perfil_mujer.webp", "Carolina");

INSERT INTO tabla_de_usuarios (email, contrasenia, fecha, dni, foto_perfil, usuario)
VALUES ("laurahernandez@gmail.com", "lauhern09", "2010-08-09", 455767820, "perfil_mujer_2.jpeg", "Laura");

INSERT INTO tabla_de_usuarios (email, contrasenia, fecha, dni, foto_perfil, usuario)
VALUES ("oscarbeccar@gmail.com", "beccaroscar", "2011-08-07", 455769823, "perfil_hombre_2.jpeg", "Oscar");

INSERT INTO tabla_de_usuarios (email, contrasenia, fecha, dni, foto_perfil, usuario)
VALUES ("alejandroperez@gmail.com", "aleperez99", "2011-08-07", 48877542, "perfil_himbre_3.jpeg", "Alejandro");


-- INSERTO POSTEOS
INSERT INTO tabla_productos (id, id_usuario, rutaImagen, nombreProducto, descripcionProducto, created_at, updated_at)
VALUES (DEFAULT, 1, "labial-rojo.png", "labial rojo", "Contiene pigmentos, aceites, ceras y emolientes que dan color y textura a los labios.", NULL, NULL);

INSERT INTO tabla_productos (id, id_usuario, rutaImagen, nombreProducto, descripcionProducto, created_at, updated_at)
VALUES (DEFAULT, 2, "m-pestanias.png", "mascara de pestaña", "Producto cosmético que se aplica a las pestañas para agregar volumen, longitud, y definición, realzando así la mirada.", NULL, NULL);

INSERT INTO tabla_productos (id, id_usuario, rutaImagen, nombreProducto, descripcionProducto, created_at, updated_at)
VALUES (DEFAULT, 3, "corrector-ojeras.png", "corrector de ojeras", "Producto cosmético diseñado para disimular las ojeras y las imperfecciones alrededor de los ojos.", NULL, NULL);

INSERT INTO tabla_productos (id, id_usuario, rutaImagen, nombreProducto, descripcionProducto, created_at, updated_at)
VALUES (DEFAULT, 4, "nude.png", "labial nude", "Producto de maquillaje que se aplica en los labios para añadir color y brillo, proporcionando un aspecto sofisticado.", NULL, NULL);

INSERT INTO tabla_productos (id, id_usuario, rutaImagen, nombreProducto, descripcionProducto, created_at, updated_at)
VALUES (DEFAULT, 5, "iluminador.png", "iluminador", "Cosmético diseñado para resaltar y dar luminosidad a ciertas áreas del rostro, como pómulos, puente de la nariz y arco de cupido.", NULL, NULL);

INSERT INTO tabla_productos (id, id_usuario, rutaImagen, nombreProducto, descripcionProducto, created_at, updated_at)
VALUES (DEFAULT, 1, "gloss.jpeg", "gloss", "Producto cosmético que se aplica sobre los labios para darles un brillo luminoso y un aspecto jugoso.", NULL, NULL);

INSERT INTO tabla_productos (id, id_usuario, rutaImagen, nombreProducto, descripcionProducto, created_at, updated_at)
VALUES (DEFAULT, 2, "base.png", "base", "Producto de maquillaje diseñado para crear una capa uniforme sobre la piel, proporcionando cobertura, corrigiendo imperfecciones.", NULL, NULL);

INSERT INTO tabla_productos (id, id_usuario, rutaImagen, nombreProducto, descripcionProducto, created_at, updated_at)
VALUES (DEFAULT, 3, "delineador.png", "delineador de ojos", "Producto cosmético utilizado para resaltar y definir la forma de los ojos mediante líneas precisas y pigmentadas aplicadas a lo largo de la línea de las pestañas.", NULL, NULL);

INSERT INTO tabla_productos (id, id_usuario, rutaImagen, nombreProducto, descripcionProducto, created_at, updated_at)
VALUES (DEFAULT, 4, "rugor.png", "rubor", "Producto de maquillaje en polvo, crema o líquido que se aplica en las mejillas para añadir un toque de color.", NULL, NULL);

INSERT INTO tabla_productos (id, id_usuario, rutaImagen, nombreProducto, descripcionProducto, created_at, updated_at)
VALUES (DEFAULT, 5, "broncer.jpg", "broncer", "Producto de maquillaje diseñado para añadir un tono cálido y bronceado a la piel.", NULL, NULL);


-- INSERTO COMENTARIOS
INSERT INTO tabla_comentarios (id, id_usuario, id_productos, comentario, created_at, updated_at)
VALUES (DEFAULT, 3, 1, "Excelente producto, realmente lo recomiendo.", NULL, NULL);

INSERT INTO tabla_comentarios (id, id_usuario, id_productos, comentario, created_at, updated_at)
VALUES (DEFAULT, 4, 1, "Me encanta este producto, es justo lo que buscaba.", NULL, NULL);

INSERT INTO tabla_comentarios (id, id_usuario, id_productos, comentario, created_at, updated_at)
VALUES (DEFAULT, 5, 1, "Cumple todas mis expectativas, ¡muy satisfecha!", NULL, NULL);

INSERT INTO tabla_comentarios (id, id_usuario, id_productos, comentario, created_at, updated_at)
VALUES (DEFAULT, 4, 2, "Increíble cómo mejora mis pestañas, las hace lucir espectaculares.", NULL, NULL);

INSERT INTO tabla_comentarios (id, id_usuario, id_productos, comentario, created_at, updated_at)
VALUES (DEFAULT, 5, 2, "Fácil de aplicar y efectivo, ¡mi nuevo favorito!", NULL, NULL);

INSERT INTO tabla_comentarios (id, id_usuario, id_productos, comentario, created_at, updated_at)
VALUES (DEFAULT, 1, 2, "No puedo creer lo bien que funciona, ¡compré más!", NULL, NULL);

INSERT INTO tabla_comentarios (id, id_usuario, id_productos, comentario, created_at, updated_at)
VALUES (DEFAULT, 2, 3, "Perfecto para cubrir ojeras, lo uso todos los días.", NULL, NULL);

INSERT INTO tabla_comentarios (id, id_usuario, id_productos, comentario, created_at, updated_at)
VALUES (DEFAULT, 3, 3, "Me encanta cómo disimula imperfecciones, ¡es genial!", NULL, NULL);

INSERT INTO tabla_comentarios (id, id_usuario, id_productos, comentario, created_at, updated_at)
VALUES (DEFAULT, 4, 3, "Textura ligera y cobertura perfecta, muy recomendado.", NULL, NULL);

INSERT INTO tabla_comentarios (id, id_usuario, id_productos, comentario, created_at, updated_at)
VALUES (DEFAULT, 5, 4, "El color es hermoso, queda perfecto con mi tono de piel.", NULL, NULL);

INSERT INTO tabla_comentarios (id, id_usuario, id_productos, comentario, created_at, updated_at)
VALUES (DEFAULT, 1, 4, "Larga duración y acabado mate, ¡me encanta!", NULL, NULL);

INSERT INTO tabla_comentarios (id, id_usuario, id_productos, comentario, created_at, updated_at)
VALUES (DEFAULT, 2, 4, "Lo uso todos los días, hidrata y tiene un color fantástico.", NULL, NULL);

INSERT INTO tabla_comentarios (id, id_usuario, id_productos, comentario, created_at, updated_at)
VALUES (DEFAULT, 3, 5, "Aporta un brillo natural y sutil, ideal para cualquier look.", NULL, NULL);

INSERT INTO tabla_comentarios (id, id_usuario, id_productos, comentario, created_at, updated_at)
VALUES (DEFAULT, 4, 5, "Resalta mis mejillas de forma elegante, ¡me encanta usarlo!", NULL, NULL);

INSERT INTO tabla_comentarios (id, id_usuario, id_productos, comentario, created_at, updated_at)
VALUES (DEFAULT, 5, 5, "Fácil de aplicar y deja un brillo espectacular, ¡recomendado!", NULL, NULL);

INSERT INTO tabla_comentarios (id, id_usuario, id_productos, comentario, created_at, updated_at)
VALUES (DEFAULT, 1, 6, "Da un brillo hermoso y duradero a mis labios, perfecto para ocasiones especiales.", NULL, NULL);

INSERT INTO tabla_comentarios (id, id_usuario, id_productos, comentario, created_at, updated_at)
VALUES (DEFAULT, 2, 6, "Textura suave y no pegajosa, ideal para un look natural.", NULL, NULL);

INSERT INTO tabla_comentarios (id, id_usuario, id_productos, comentario, created_at, updated_at)
VALUES (DEFAULT, 3, 7, "Excelente durabilidad y acabado mate, lo uso diariamente.", NULL, NULL);

INSERT INTO tabla_comentarios (id, id_usuario, id_productos, comentario, created_at, updated_at)
VALUES (DEFAULT, 4, 7, "Color perfecto y fácil de difuminar, ¡me encanta!", NULL, NULL);

INSERT INTO tabla_comentarios (id, id_usuario, id_productos, comentario, created_at, updated_at)
VALUES (DEFAULT, 5, 7, "Fórmula suave y tono hermoso, ideal para cualquier tono de piel.", NULL, NULL);

INSERT INTO tabla_comentarios (id, id_usuario, id_productos, comentario, created_at, updated_at)
VALUES (DEFAULT, 1, 8, "Dibuja líneas precisas y de larga duración, perfecto para un delineado impecable.", NULL, NULL);

INSERT INTO tabla_comentarios (id, id_usuario, id_productos, comentario, created_at, updated_at)
VALUES (DEFAULT, 2, 8, "Negro intenso y fácil de aplicar, ¡mi favorito para resaltar mis ojos!", NULL, NULL);

INSERT INTO tabla_comentarios (id, id_usuario, id_productos, comentario, created_at, updated_at)
VALUES (DEFAULT, 3, 9, "Aporta un bronceado natural y uniforme, ideal para todo el año.", NULL, NULL);

INSERT INTO tabla_comentarios (id, id_usuario, id_productos, comentario, created_at, updated_at)
VALUES (DEFAULT, 4, 9, "Textura suave y bronceado perfecto, lo recomiendo sin duda.", NULL, NULL);

INSERT INTO tabla_comentarios (id, id_usuario, id_productos, comentario, created_at, updated_at)
VALUES (DEFAULT, 5, 9, "Bronceado sutil y duradero, ideal para lucir una piel radiante.", NULL, NULL);

INSERT INTO tabla_comentarios (id, id_usuario, id_productos, comentario, created_at, updated_at)
VALUES (DEFAULT, 1, 10, "Color intenso y textura confortable, perfecto para un look impactante.", NULL, NULL);

INSERT INTO tabla_comentarios (id, id_usuario, id_productos, comentario, created_at, updated_at)
VALUES (DEFAULT, 2, 10, "Larga duración y colores vibrantes, ¡me encanta cómo resalta mis labios!", NULL, NULL);

INSERT INTO tabla_comentarios (id, id_usuario, id_productos, comentario, created_at, updated_at)
VALUES (DEFAULT, 3, 10, "Textura suave y no reseca los labios, ideal para cualquier ocasión.", NULL, NULL);