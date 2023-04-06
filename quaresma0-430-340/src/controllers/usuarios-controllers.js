import express from "express";
const app = express();

class usuarios {
    static usuariosController(app) {
        app.get('/usuario', (req, res) => {
            res.send("<h1>Rastreamento da aplicação sendo feito com nodemon</h1>")
            })
    };
};

export default usuarios