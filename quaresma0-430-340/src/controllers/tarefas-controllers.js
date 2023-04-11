import Tarefa from "../models/Tarefa.js";
import { bdTarefas } from "../infra/db.js"

class tarefaController {
    static rotas(app) {
        // Rota para o recurso tarefa
        app.get('/tarefa', (req, res) => {
            console.log(req)
            res.send(bdTarefas)
        })
            
        app.post('/tarefa', (req, res) => {

            const { titulo, descricao, status, data} = req.body
            const tarefaInserir = new Tarefa (titulo, descricao, status, data)

            bdTarefas.push(tarefaInserir)
            
            new Tarefa(titulo, descricao, status, data)
            console.log(titulo, descricao, status, data)
            res.send("ROTA COM POST")
        })
    };
};

export default tarefaController