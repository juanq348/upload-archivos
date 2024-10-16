import { Router } from "express";
import { uploadImage } from "../middlewares/upload.middleware.js";
import crypto from "node:crypto";

const productsRouter = Router();
const products = [];

productsRouter.post("/", uploadImage, (req,res) =>{
    const {name, description, price} = req.body;
    console.log(req.body);

    if (!name || !description || !price){
        return res.status(400).json({msg:"Debe rellenar todos los campos (name, description, price)"})
    }

    if(isNaN(price)){
        return res.status(400).json({msg:"El precio debe ser numerico"})
    }

    const product = {
        id: crypto.randomUUID(),
        name,
        description,
        price:Number(price),
        imageUrl: `http://localhost:4000/uploads/${req.body.image}`
    };

    products.push(product);
    res.status(201).json({product});
});

export { productsRouter };