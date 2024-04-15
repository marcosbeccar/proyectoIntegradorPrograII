const db = {
    usuario: {
      1: {
        id: 1,
        email: "pepitogomez@gmail.com",
        contraseña: "pepito05",
        fecha: "21-03-04 00:00:00",
        dni: 45576980,
        foto_perfil: "/images/perfil_hombre.jpeg"
      },
      2: {
        id: 2,
        email: "carolinarodriguez@gmail.com",
        contraseña: "carolina05",
        fecha: "17-05-09 00:00:00",
        dni: 45768980,
        foto_perfil: "/images/perfil_mujer.webp"
      },
      3: {
        id: 3,
        email: "laurahernandez@gmail.com",
        contraseña: "lauhern09",
        fecha: "09-08-10 00:00:00",
        dni: 455767820,
        foto_perfil: "/images/perfil_mujer_2.jpeg"
      },
      4: {
        id: 4,
        email: "oscarbeccar@gmail.com",
        contraseña: "beccaroscar",
        fecha: "07-08-11 00:00:00",
        dni: 455769823,
        foto_perfil: "/images/perfil_hombre_2.jpeg"
      },
      5: {
        id: 5,
        email: "alejandroperez@gmail.com",
        contraseña: "aleperez99",
        fecha: "07-08-11 00:00:00",
        dni: 45576980,
        foto_perfil: "/images/perfil_himbre_3.jpeg"
      }
    },
    productos: [
        {
          id: 1,
          id_usuario: 1,
          rutaImagen: "/images/labial-rojo.png",
          nombreProducto: "labial rojo",
          descripcionProducto: "Contiene pigmentos, aceites, ceras y emolientes que dan color y textura a los labios.",
          comentarios: [
            { nombreUsuario: "Laura Hernandez", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_mujer_2.webp" },
            { nombreUsuario: "Oscar Beccar", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_hombre_2.jpeg" },
            { nombreUsuario: "Alejandro Perez", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_himbre_3.jpeg" }
          ]
        },
        {
          id: 2,
          id_usuario: 2,
          rutaImagen: "/images/m-pestaña.png",
          nombreProducto: "mascara de pestaña",
          descripcionProducto: "Producto cosmético que se aplica a las pestañas para agregar volumen, longitud, y definición, realzando así la mirada.",
          comentarios: [
            { nombreUsuario: "Carolina Rodriguez", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_mujer.webp" },
            { nombreUsuario: "Oscar Beccar", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_hombre_2.jpeg" },
            { nombreUsuario: "Pepito Gomez", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_hombre.jpeg" }
          ]
        },
        {
          id: 3,
          id_usuario: 3,
          rutaImagen: "/images/corrector-ojeras.png",
          nombreProducto: "corrector de ojeras",
          descripcionProducto: "Producto cosmético diseñado para disimular las ojeras y las imperfecciones alrededor de los ojos.",
          comentarios: [
            { nombreUsuario: "Laura Hernandez", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_mujer_2.webp" },
            { nombreUsuario: "Oscar Beccar", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_hombre_2.jpeg" },
            { nombreUsuario: "Alejandro Perez", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_himbre_3.jpeg" }
          ]
        },
        {
          id: 4,
          id_usuario: 4,
          rutaImagen: "/images/nude.png",
          nombreProducto: "labial nude",
          descripcionProducto: "Producto de maquillaje que se aplica en los labios para añadir color y brillo, proporcionando un aspecto sofisticado.",
          comentarios: [
            { nombreUsuario: "Oscar Beccar", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_hombre_2.jpeg" },
            { nombreUsuario: "Pepito Gomez", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_hombre.jpeg" },
            { nombreUsuario: "Carolina Rodriguez", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_mujer.webp" }
          ]
        },
        {
          id: 5,
          id_usuario: 5,
          rutaImagen: "/images/iluminador.png",
          nombreProducto: "iluminador",
          descripcionProducto: "Cosmético diseñado para resaltar y dar luminosidad a ciertas áreas del rostro, como pómulos, puente de la nariz y arco de cupido.",
          comentarios: [
            { nombreUsuario: "Pepito Gomez", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_hombre.jpeg" },
            { nombreUsuario: "Carolina Rodriguez", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_mujer.webp" },
            { nombreUsuario: "Laura Hernandez", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_mujer_2.webp" }
          ]
        },
        {
          id: 6,
          id_usuario: 1,
          rutaImagen: "/images/gloss.jpeg",
          nombreProducto: "gloss",
          descripcionProducto: "Producto cosmético que se aplica sobre los labios para darles un brillo luminoso y un aspecto jugoso.",
          comentarios: [
            { nombreUsuario: "Alejandro Perez", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_himbre_3.jpeg" },
            { nombreUsuario: "Oscar Beccar", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_hombre_2.jpeg" },
            { nombreUsuario: "Pepito Gomez", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_hombre.jpeg" },
            { nombreUsuario: "Carolina Rodriguez", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_mujer.webp" }
          ]
        },
        {
          id: 7,
          id_usuario: 2,
          rutaImagen: "/images/base.png",
          nombreProducto: "base",
          descripcionProducto: "Producto de maquillaje diseñado para crear una capa uniforme sobre la piel, proporcionando cobertura, corrigiendo imperfecciones.",
          comentarios: [
            { nombreUsuario: "Oscar Beccar", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_hombre_2.jpeg" },
            { nombreUsuario: "Pepito Gomez", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_hombre.jpeg" },
            { nombreUsuario: "Carolina Rodriguez", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_mujer.webp" }
          ]
        },
        {
          id: 8,
          id_usuario: 3,
          rutaImagen: "/images/delineador.png",
          nombreProducto: "delineador de ojos",
          descripcionProducto: "Producto cosmético utilizado para resaltar y definir la forma de los ojos mediante líneas precisas y pigmentadas aplicadas a lo largo de la línea de las pestañas.",
          comentarios: [
            { nombreUsuario: "Laura Hernandez", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_mujer_2.webp" },
            { nombreUsuario: "Oscar Beccar", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_hombre_2.jpeg" },
            { nombreUsuario: "Alejandro Perez", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_himbre_3.jpeg" }
          ]
        },
        {
          id: 9,
          id_usuario: 4,
          rutaImagen: "/images/rugor.png",
          nombreProducto: "rubor",
          descripcionProducto: "Producto de maquillaje en polvo, crema o líquido que se aplica en las mejillas para añadir un toque de color.",
          comentarios: [
            { nombreUsuario: "Oscar Beccar", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_hombre_2.jpeg" },
            { nombreUsuario: "Pepito Gomez", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_hombre.jpeg" },
            { nombreUsuario: "Carolina Rodriguez", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_mujer.webp" }
          ]
        },
        {
          id: 10,
          id_usuario: 5,
          rutaImagen: "/images/croncer.jpg",
          nombreProducto: "broncer",
          descripcionProducto: "Producto de maquillaje diseñado para añadir un tono cálido y bronceado a la piel.",
          comentarios: [
            { nombreUsuario: "Pepito Gomez", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_hombre.jpeg" },
            { nombreUsuario: "Carolina Rodriguez", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_mujer.webp" },
            { nombreUsuario: "Laura Hernandez", textoComentario: "Muy buen producto", imagenPerfil: "/images/perfil_mujer_2.webp" }
          ]
        }
      ]
    };
    
    module.exports=db;
