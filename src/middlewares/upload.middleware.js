import { upload } from "../settings/upload.settings.js";

export const uploadImage =  (req, res, next) => {
    const uploadSingle = upload.single("image");

    uploadSingle(req, res , (error) =>{
        if(error || !req.file){
            console.log(error);
            return res.status(400).json({msg:"Error al subir el archivo"});
        }

        if(!req.body){
            req.body = {};
        }

        req.body.image = req.file.filename;

        next();
    });
}