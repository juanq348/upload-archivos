# Práctica Subida de Archivos

Este proyecto permite la creación de productos con la posiilidad de subir una imagen utilizando Multer. Los productos se almacenan en la memoria con los siguientes campos:

  `name`: Nombre del producto.

  `description`:  Descripción del producto.

  `price`: Precio del producto.

  `imageUrl`: Url de la imagen subida con el producto.

# Organización
 - Las configuraciones de Multer se encuentran en `upload.settings.js` para manejar la subida de imágenes con límite de tamaño y extensiones permitidas.
 - La ruta `products.routes.js` sirve para manejar los endpoints.
 - El manejo de la subida de archivos se encuentra en `upload.middleware.js`.

# Multer
- Se utilizó la dependencia Multer para manejar la subida de imágenes, limitando sus extensiones a `jpg` y `png`.
- Estas imagenes se almacenan en la carpeta uploads.

# Almacenamiento
- Los productos se almacenan en un array de objetos en memoria, debido a que no usa una base de datos.
   
## Librerias necesarias para que el proyecto funcione:
 - `Express`
 - `Crypto`
 - `Cors`
 - `Helmet`
 - `Morgan`
 - `Multer`

## Los pasos para ejecutar el proyecto localmente son:
**A través de git bash:**
 **1-** Puede clonar este repositorio con:
 ```bash
 $git clone https://github.com/juanq348/upload-archivos
 ```
 **2-** Dirigete a donde hayas clonado el repositorio usando:
 ```bash
 $git cd Ubicación de repositorio (puedes arrastrar la carpeta a la ventana de Git Bash)
 ```
 **3-** Ahora para que el proyecto pueda funcionar, debes abrir la terminal en Visual Studio Code para ingresar el siguiente comando para instalar las dependencias:
 ```bash
 npm install
 ```
 **4-** Para iniciar el servidor debes poner el siguiente comando:
 ```bash
 npm run dev
 ```
## Pasos para agregar productos
**1-** Necesitas instalar Postman como extensión en Visual Studio Code, dirigirte a la extensión, elige el metodo `POST`, en el apartado `form-data` en `Body` e ingresar la siguiente dirección:
 ```bash
 http://localhost:4000/products
 ```
 **2-** Para agregar un producto debes colocar en el apartado `key`:
 ```bash
name
description
price (debe ser un número)
image (debes seleccionar la imagen que desees)
 ```
Y en el apartado `value` los valores de cada uno de los campos, como por ejemplo:
```bash
name: Martillo
description: Utilizada para golpear, clavar, desclavar, empujar, calzar partes, romper o deformar objetos. 
price: 5000
image: (debes seleccionar la imagen que desees)
 ```
Para recibir una respuesta similar:
```bash
"id": "123e4567-e89b-12d3-a456-426614174000",
"name": "Martillo",
"description": "Utilizada para golpear, clavar, desclavar, empujar, calzar partes, romper o deformar objetos. ",
"price": 5000,
"imageUrl": "http://localhost:4000/uploads/martillo.jpg"
 ```

**3-** Las imágenes seran subidas a la carpeta `src/uploads`. La URL será devuelta en la respuesta en `imageUrl`.
