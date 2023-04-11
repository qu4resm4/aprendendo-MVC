import Usuario from "../models/Usuario.js";

class usuarios {
    static usuariosController(app) {
        app.get('/usuario', (req, res) => {
            res.send("<h1>Rastreamento da aplicação sendo feito com nodemon</h1>")
            })

            app.post('/usuario', (req, res) => {
                const { nome, email, senha} = req.body

                new Usuario(nome, email, senha)
                console.log(nome, email, senha)
                res.send("ROTA COM POST")
            })
    };
    
};

export default usuarios