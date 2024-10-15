import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { productsRouter } from "./routes/products.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use("/products", productsRouter);

app.listen(4000, () => {
    console.log("Server funcionando en puerto 4000");
})
