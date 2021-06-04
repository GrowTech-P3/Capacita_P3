const Curso         = require('../models').Curso
const Instituicao   = require('../models').Instituicao
const Denuncia      = require('../models').Denuncias
const Usuario_pcd   = require('../models').Usuario_pcd

const { Op }    = require('sequelize')

exports.listAll = async (req, res) => {
    const denuncias = await Denuncia.findAll({
        include: [
            { model: Curso, include: [
                {model: Instituicao}
            ]},
            { model: Usuario_pcd }
        ]
    })

    return res.send(denuncias);
    
}

exports.listAllOpen = async (req, res) => {
    const denuncias = await Denuncia.findAll({
        where: {aberto: true},
        include: [
            { model: Curso, include: [
                {model: Instituicao}
            ]},
            { model: Usuario_pcd }
        ]
    })

    res.send(denuncias)
}

exports.findOne = async (req, res) => {
    const {id} = req.body

    let response = {
        message: ''
    }

    try {
        const denuncia = await Denuncia.findOne({
            where: { id },
            include: [
                { model: Curso, include: [
                    {model: Instituicao}
                ]},
                { model: Usuario_pcd }
            ]
        })

        if(denuncia) {
            response.message = "Denuncia Localizada!"
            response.curso = denuncia;
        } else {
            response.message = "Denuncia não Localizada!"
        }

    } catch (err) {
        res.send(err)
    }
    res.send(response);
}

//CRIA DENUNCIA E DEFINE RELACIONAMENTO COM CURSO
exports.defineOne = async (req, res) => {
    const {id_usuario_pcd, id_curso, descricao} = req.body
    

    try {
        const denuncia = await Denuncia.create({
            id_usuario_pcd,
            descricao,
            data: new Date(),
            aberto: true
        })
    
        const cursoLocalizado = await Curso.findOne({
            where: {id: id_curso}
        })
    
        await denuncia.addCurso(cursoLocalizado)
    
        const resultadoDenuncia = await Denuncia.findOne({
            where: {id: denuncia.id},
            include: [
                { model: Curso, include: [
                    {model: Instituicao}
                ]},
                { model: Usuario_pcd }
            ]
        })

        res.send(resultadoDenuncia)

    } catch (err) {
        console.log(err)
        res.send(err)
    }
}

//FILTRO PESQUISAR POR DENUNCIAS (NOME DO CURSO, INSTITUICAO E DATA)
exports.searchAll = async (req, res) => {
    const {nome_instituicao, nome_curso, dataInicial, dataFinal} = req.body
    await Denuncia.findAll ({
        where: {
            [Op.and]: [
                {data: {[Op.between] : [dataInicial, dataFinal]}},
                {aberto: true}
            ] 
        },
        include:[
            { 
                model: Curso, where: {nome_curso: {[Op.substring]: nome_curso}}, include: [
                    {model: Instituicao, where: {nome: {[Op.substring]: nome_instituicao}}}
                ]
            },
            { model: Usuario_pcd}
        ] 
    }).then(denuncia => {
        res.send(denuncia)
    }).catch(err => {
        console.log(err)
        res.send(err)
    })
}

// FECHAR DENUNCIACURSO
exports.autorizationDenunciaCursoClose = async (req, res) => {
    let {id} = req.body
    let response = {
        message: '',
    }
    
    const aberto = false;
    
    try {
        const denunciaBusca = await Denuncia.update({ aberto }, {
            where: {
                id
            }
        });
    
        if(denunciaBusca == 1) {
            response.message = "Denuncia de Curso fechada com sucesso!"
        } else {
            response.message = "Denuncia de Curso não localizada!"
        }
    } catch (err) {
        console.log(err)
        return res.send(err)
    }
    
    return res.send(response)

}

// FECHAR DENUNCIACURSO E DESABILITAR CURSO
exports.autorizationDenunciaCursoCloseCursoDisable = async (req, res) => {
    let {id, cursos} = req.body
    let response = {
        message: '',
    }
    
    const aberto = false;
    
    try {
        const denunciaBusca = await Denuncia.update({ aberto }, {
            where: {
                id
            }
        });
    
        const cursoBusca = await Curso.update({ ativo: cursos.ativo }, {
            where: {
                id: cursos.id
            }
        });
    
        if(denunciaBusca == 1 && cursoBusca == 1) {
            response.message = "Denuncia de Curso fechada com sucesso! Curso Inativado!"
        } else if (cursoBusca == 0) {
            response.message = "Curso não localizado!"
        } else if (denunciaBusca == 0) { 
            response.message = "Denuncia não localizada!"
        } else if (denunciaBusca == 0 && cursoBusca == 0) { 
            response.message = "Denuncia de Curso e Curso não localizada!"
        } else {
            response.message = "Denuncia de Curso e Curso não localizada!"
        }
    } catch (err) {
        console.log(err)
        return res.send(err)
    }
    
    return res.send(response)

}
