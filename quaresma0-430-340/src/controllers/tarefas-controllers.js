import express from "express";
const app = express();
class tarefas {
    static tarefaController(app) {
        app.get('/tarefa', (req, res) => {
            console.log(req)
            res.send("Rota ativada com o GET e NODEMON")
        })
            
        app.post('/tarefa', (req, res) => {
            const { funcionario, idade, cargo, CPF} = req.body

            console.log(funcionario, idade, cargo, CPF)
            res.send("ROTA COM POST")
        })
        };
    };

export default tarefas