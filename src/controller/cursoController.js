const Curso = require('../models').Curso
const Instituicao = require('../models').Instituicao
const Deficiencia = require('../models').Tipo_deficiencia
const { Op } = require("sequelize");

exports.listAll = (req, res) => {
    Curso.findAll({
        include:
            [
                { model: Instituicao },
                { model: Deficiencia }
            ]
    }).then(cursos => {
        res.send(cursos)
    }).catch(err => {
        res.send(err)
    })
}

exports.searchAll = (req, res) => {
    const { pesquisa } = req.body

    Curso.findAll({
        where: {
            nome_curso: { [Op.substring]: pesquisa }
        },
        include: [
            { model: Instituicao },
            { model: Deficiencia }
        ]
    }).then(cursos => {
        res.send(cursos)
    }).catch(err => {
        res.send(err)
    })
}

exports.createOne = (req, res) => {
    let { id_instituicao, nome_curso, id_deficiencia, duracao, carga_horaria, horario, valor, ativo, resumo, descricao, url_img } = req.body
    Curso.create({ id_instituicao, nome_curso, id_deficiencia, duracao, carga_horaria, horario, valor, ativo, resumo, descricao, url_img })
        .then(curso => {
            res.send(curso)
        }).catch(err => {
            res.send(err)
        })
}