const Administrador         = require('../models').Administrador
const Usuario               = require('../models').Usuario
const Instituicao           = require('../models').Instituicao
const Noticia               = require('../models').Noticia
const { Op }                = require("sequelize")

exports.listAll = (req, res) => {
    Noticia.findAll({
        where:{ativo:true},
        include: [
            { model: Usuario, include: [
                { model: Instituicao },
                { model: Administrador }
            ] }
        ]
    }).then(noticia => {
        res.send(noticia)
    }).catch(err => {
        console.log(err)
        res.send(err)
    })
}

exports.findOne = async (req, res) => {
    const { id } = req.body

    let response = {
        message: ""
    }

    try {
        const noticia = await Noticia.findOne({
            where: { id },
            include: [
                {model: Usuario, include: [
                    {model: Administrador},
                    {model: Instituicao}
                ]}
            ]
        })
    
        if(!noticia){
            return res.send({message:"Notícia não encontrada"});
        } else {
            response.message = "Notícia localizada com sucesso!"
            response.noticia = noticia
        }
    } catch (err) {
        console.log(err)
        return res.send(err);
    }
    
    return res.send(response)
}

exports.searchAll = async (req, res) => {
    const {titulo_noticia, email, dataInicial, dataFinal} = req.body

    try {
        const noticia = await Noticia.findAll({
            where: {
                [Op.and]: [
                    {ativo: true, titulo_noticia: {[ Op.substring]: titulo_noticia }},
                    {data_publicacao: {[Op.between] : [dataInicial, dataFinal]}}
                ]
            },
            include: [
                 {model: Usuario, where: {email: {[ Op.substring]: email }}, include: [
                    { model: Instituicao },
                    { model: Administrador}
                ]}
            ]
        })

        res.send(noticia)

    } catch (err) {
        console.log(err)
        res.send(err)
    }
}

exports.createOne = async (req, res) => {
    const { titulo_noticia, descricao, txt_noticia, img_publicacao, id_usuario } = req.body

    const ativo = true;
    const data_publicacao = new Date();

    let response = {
        message: ""
    }

    try {
        const noticia = await Noticia.create({
            titulo_noticia,
            descricao,
            txt_noticia,
            img_publicacao,
            id_usuario,
            data_publicacao,
            ativo
        });

        console.log("Aqui estou")
    
        if (noticia) {
            response.message = "Notícia cadastrada com sucesso!"
            response.noticia = noticia
        } else {
            response.message = "Notícia não pode ser cadastrada"
        }
    } catch (err) {
        console.log(err)
        return res.send(err)
    }
    
    return res.send(response);
}

exports.remove = async (req,res) => {
    const {id} = req.body;
    
    try {
        const noticia = await Noticia.findOne({where:{id}});

        if(!noticia){
            return res.send({message:"Notícia não encontada!"});
        } 
        
        await Noticia.update({ativo:false}, {where:{id}});
        return res.send({message:"Notícia deletada!"});

    } catch (err) {
        console.log(err)
        return res.send(err)
    }

}

exports.update = async (req,res) => {
    const { id, titulo_noticia, descricao, txt_noticia, img_publicacao } = req.body;
   
    const data_publicacao = new Date();
    const noticia = await Noticia.findOne({where:{id}});
    
    try {
        if(!noticia){
            return res.send({message:"Notícia não encontrada!"});
        }

        await Noticia.update({
            titulo_noticia, descricao, txt_noticia, img_publicacao, data_publicacao
        }, {
            where: {id}
        });
        return res.send({message:"Notícia atualizada!"});

    } catch (err) {
        console.log(err)
        return res.send(err)
    }
}