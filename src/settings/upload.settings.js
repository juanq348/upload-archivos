import multer from "multer";
import path from "node:path";
import crypto from "node:crypto";

const storage = multer.diskStorage({
    destination:(req, file, cb) =>{
        cb(null, "src/uploads/"); 
    },
    filename: (req, file, cb) =>{
        const fileName = crypto.randomUUID().toString()+path.extname(file.originalname); 
        cb(null, fileName);
    }
}); 


const maxMb = 20;
const limits = { fileSize: 1024 * 1024 * maxMb }; 

const fileFilter = (req, file, cb) =>{
    const fileTypes = /jpeg|jpg|png|gif|webp/; 

    const allowExtName = fileTypes.test(path.extname(file.originalname))

    if(!allowExtName) {
        return cb(new Error("Solo se permiten imágenes (jpeg, jpg, png, gif, webp)")); 
    }

    return cb(null, true); 
};

export const upload = multer({ 
    storage,
    limits,
    fileFilter
});