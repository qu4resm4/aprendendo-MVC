import express from "express";
import tarefas from "./controllers/tarefas-controllers.js";
import usuarios from "./controllers/usuarios-controllers.js";


const app = express();

    app.use(express.json());

    app.get('/', (req, res) => {
        console.log(req.body)
        res.send("<h1>Página Inicial</h1>")
    })

tarefas.tarefaController(app);
usuarios.usuariosController(app);

export default app