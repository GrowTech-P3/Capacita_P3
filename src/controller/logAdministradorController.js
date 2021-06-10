const logAdministrador = require("../models/").Log_administrador;
const Administrador = require("../models/").Administrador;

const store = async (req, res) => {
    const { administrador, logAtividade } = req.body;
    const data_hora = new Date();
    const log = await logAdministrador.create({ id_administrador:administrador.idAdministrador, atividade:logAtividade, data_hora });
    return res.json(log);
}

const index = async (req, res) => {
    const findLog = await logAdministrador.findAll({ include: Administrador });
    const response = [];
    findLog.forEach(index => {
        const dados = {
            administrador:{
                idAdministrador: index.Administrador.id_administrador,
                nome: index.Administrador.nome,
            },
            logAtividade: index.atividade,
            dataHora: index.createdAt
        }
        response.push(dados);
    });
    return res.send(response);
}

const indexById = async (req, res) => {
    const { id_administrador } = req.params;
    console.log(req.params)
    const findAdmin = await logAdministrador.findAll({
        where: {
            id_administrador
        },
        include: Administrador,
    });
    const response = [];
    findAdmin.forEach(index =>{
        const dados = {
            administrador:{
                idAdministrador: index.Administrador.id_administrador,
                nome: index.Administrador.nome,
            },
            logAtividade: index.atividade,
            dataHora: index.createdAt
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