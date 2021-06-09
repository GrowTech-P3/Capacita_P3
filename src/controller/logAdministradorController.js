const logAdministrador = require("../models/").Log_administrador;
const Administrador = require("../models/").Administrador;

const store = async (req, res) => {
    const { id_administrador, atividade } = req.body;
    const data_hora = new Date();
    const log = await logAdministrador.create({ id_administrador, atividade, data_hora });
    return res.json(log);
}

const index = async (req, res) => {
    const findLog = await logAdministrador.findAll({ include: Administrador });
    const response = [];
    findLog.forEach(element => {
        const dados = {
            id: element.Administrador.id_administrador,
            nome: element.Administrador.nome,
            atividade: element.atividade,
            createdAt: element.createdAt
        }
        response.push(dados);
    });
    return res.send(response);
}

const indexById = async (req, res) => {
    const { id_administrador } = req.params;
    const findAdmin = await logAdministrador.findAll({
        where: {
            id_administrador
        },
        include: Administrador,
    });
    const response = [];
    findAdmin.forEach(index =>{
        const dados = {
            id: index.Administrador.id_administrador,
            nome: index.Administrador.nome,
            atividade: index.atividade,
            createdAt: index.createdAt
        }
        response.push(dados);
    });
    return res.send(response);
}

module.exports = {
    store,
    index,
    indexById
}