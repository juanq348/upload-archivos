import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { productsRouter } from "./routes/products.routes.js";
import path from "node:path";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use("/uploads",express.static(path.join(path.resolve(), "src", "uploads")))

app.use("/products", productsRouter);

app.use((err, req, res, next) =>{
    console.error(err.stack);
    if(err.message === "Solo debes subir imágenes (jpg, png)"){
        return res.status(400).json({msg: err.message});
    }
    res.status(500).json({msg:"Error en el servidor"})
})

app.listen(4000, () => {
    console.log("Server funcionando en puerto 4000");
})
