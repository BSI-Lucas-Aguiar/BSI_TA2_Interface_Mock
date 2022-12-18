import express, { Router } from "express";

import { criaControllerFactory } from "./infra/venda_factory";

const app = express();

const route = Router();
const vendaController = criaControllerFactory();

route.get("/vendas", vendaController.listar_dados);

app.use(express.json());
app.use(route);

app.listen(3000, () => {
    console.log('Conectado na porta 3000');
})
