import Usuario from "../models/Usuario.js"
import Tarefa from "../models/Tarefa.js"

const bdUsuarios = []
const bdTarefas = []

const usuario = new Usuario("Manuela Alexandre", "rjmanuelaandrade@gmail.com", "4sdsr564ds")
bdUsuarios.push(usuario)

const tarefa = new Tarefa("titulo da tarefa", "descrição da tareda", "incompleto", new Date())
bdTarefas.push(tarefa)

export {bdTarefas, bdUsuarios}