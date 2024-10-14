import { Router} from "express";

const productsRouter = Router();

productsRouter.post("/", (req,res) =>{
    console.log(req.body);

    res.status(201).json({msg:"Producto creado"});
});

export {productsRouter}