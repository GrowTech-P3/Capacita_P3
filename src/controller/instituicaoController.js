const Instituicao = require('../models').Instituicao
const Usuario = require('../models').Usuario
const Curso = require('../models').Curso 
const Tipo_deficiencia = require('../models').Tipo_deficiencia
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");

exports.listAll = (req, res) => {
    Instituicao.findAll ({
        include:[
            {
                model: Curso, 
                include: [
                    {model: Tipo_deficiencia},
                ] 
            }
        ]
    }).then(instituicao => {
        res.send(instituicao) 
    }).catch(err => {
        res.send(err)
    })
}

exports.searchAll = (req, res) => {
    const {pesquisa} = req.body
    Instituicao.findAll ({
        where: {
            nome: {[Op.substring]: pesquisa}
        },
        include:[
            {
                model: Curso, 
                include: [
                    {model: Tipo_deficiencia},
                ] 
            }
        ] 
    }).then(instituicao => {
        res.send(instituicao)
    }).catch(err => {
        res.send(err)
    })
}

exports.createOne = async (req, res) => {
    let {nome, telefone, endereco, numero, bairro, cidade, id_estado, cep, cnpj, email, password} = req.body
    let response = {
        message: '',
        liberado: false
    }
    const tipo=1;
    const ativo=true;
    const senha = await bcrypt.hash(password,8);
    const emailExists =  await Usuario.findOne({where:{email}});
    if(emailExists){
        return res.json({message:"Email já utilizado!"});
    }
    const user = await Usuario.create({email,senha,ativo,tipo});
    const instituicao = await Instituicao.create({
        nome,
        telefone,
        endereco,
        numero,
        bairro,
        cidade,
        id_estado,
        id_usuario:user.id,
        cep,
        cnpj,
        ativo
    });
    response = {
        message:"Instituição cadastrada com sucesso!",
        instituicao,
        liberado:true
    }
    return res.send(response);
}