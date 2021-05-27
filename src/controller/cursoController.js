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

exports.findOne = async (req, res) => {
    const {id} = req.body

    let response = {
        message: ''
    }

    try {
        const curso = await Curso.findOne({
            where: { id },
            include:[
                    {model: Instituicao},
                    {model: Deficiencia}
            ]
        })

        if(curso) {
            response.message = "Curso Localizado!"
            response.curso = curso;
        } else {
            response.message = "Curso Não Localizado!"
        }

    } catch (err) {
        res.send(err)
    }
    res.send(response);
}

//LOCALIZA CURSOS CADASTRADOS QUE AINDA NÃO FORAM
//LIBERADAS PELOS ADMINISTRADORES
exports.listAllDisable = async (req, res) => {

    try {
        const curso = await Curso.findAll({
            where: { ativo: 0},
            include: [
                { model: Instituicao },
                { model: Deficiencia }
            ]
        })

        res.send(curso)

    } catch (err) {
        res.send(err)
    }
}

//LOCALIZA CURSOS CADASTRADOS QUE AINDA NÃO FORAM
//LIBERADAS PELOS ADMINISTRADORES
exports.searchAllDisable = async (req, res) => {
    const { nome_curso } = req.body

    try {
        const curso = await Curso.findAll({
            where: { 
                 [ Op.and ]: [
                    {nome_curso: {[Op.substring]: nome_curso}},
                    {ativo: 0}
                ] 
            },
            include: [
                { model: Instituicao },
                { model: Deficiencia }
            ]
        })

        res.send(curso);

    } catch (err) {
        res.send(err)
    }
}

//LOCALIZA CURSOS CADASTRADOS QUE AINDA NÃO FORAM
//LIBERADAS PELOS ADMINISTRADORES
exports.searchAllDisableFilter = async (req, res) => {
    let {nome_curso, instituicao, tipo_deficiencium} = req.body

    try {
        const curso = await Curso.findAll({
            where: {
                [Op.and]: [
                    {ativo: false, nome_curso: {[ Op.substring]: nome_curso }}
                ] 
            },
            include: [
                { model: Instituicao, where: { nome: {[Op.substring]: instituicao.nome }} },
                { model: Deficiencia, where: { nome: {[Op.substring]: tipo_deficiencium.nome }} }
            ]
        })

        res.send(curso)

    } catch (err) {
        res.send(err)
    }
}

exports.autorizationCurso = async (req, res) => {
    let {id} = req.body
    let response = {
        message: '',
    }
    const ativo=true;
    const curso = await Curso.update({ ativo }, {
        where: {
            id
        }
    });

    if(curso == 1) {
        response.message = "Curso autorizado com sucesso!"
    } else {
        response.message = "Curso não localizado!"
    }
    
    return res.send(response);
}