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

exports.defineOne = async (req, res) => {
    const {id_usuario_pcd, id_usuario, descricao, data, aberto} = req.body
    

    try {
        const denuncia = await Denuncia.create({
            id_usuario_pcd,
            id_usuario,
            descricao,
            data,
            aberto
        })
    
        const cursoLocalizado = await Curso.findOne({
            where: {id: 1}
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
