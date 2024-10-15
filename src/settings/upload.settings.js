import multer from "multer";
import path from "node:path";
import crypto, { createPrivateKey } from "node:crypto";

// storage: donde se almacenara el archivo, con que nombre, etc
const storage = multer.diskStorage({
    destination:(_req, _file, cb) =>{
        cb(null, "src/uploads/"); //El error que va a enviar y donde se va a almacenar el archivo
    },
    filename: (_req, file, cb) =>{
        const fileName = crypto.randomUUID().toString()+path.extname(file.originalname); //Genera un id random y mantiene el nombre del archivo con su extensión (por ej: imagen.jpg => imagen es el nombre y jpg es la extensión)
        cb(null, fileName); //El error que va a enviar y el nombre que va a recibir el archivo
    }
}); //Se va a guardar en el almacenamiento personal

// limits: tamaño máximo de archivo
const maxMb = 20; // Se definen los Mb máximos del archivo
const limits = { fileSize: 1024 * 1024 * maxMb }; // Se escala desde bytes hasta Mb

// filters: que tipo de archivo va a permitir (jpg, jpeg, mp4, mp3, etc.)
const fileFilter = (req, file, cb) =>{
    const fileTypes = / jpeg | jpg | png | gif | webp /; //Se eligen los archivos que vamos a permitir

    const allowExtName = fileTypes.test(path.extname(file.originalname)) // Pregunta si la extensión del archivo que queremos enviar es igual a las que elegimos arriba

    if(!allowExtName) {
        return cb(new Error("Solo se permiten imágenes (jpeg, jpg, png, gif, webp)")); // Envía un error en caso de que el archivo no coincida con el que establecimos en fileTypes
    }

    return cb(null, true); // Retorna un true si es que el archivo paso el filtro exitosamente
};

//Exportamos el middlware ejecutando multer
export const upload = multer({ 
    storage,
    fileFilter,
    limits
})