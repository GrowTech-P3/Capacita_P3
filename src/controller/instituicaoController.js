const Instituicao = require('../models').Instituicao
const Usuario = require('../models').Usuario
const Curso = require('../models').Curso 
const Tipo_deficiencia = require('../models').Tipo_deficiencia
const Estado = require('../models').Estado
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

//FILTRO PESQUISAR POR INSTITUICOES (NOME INSTITUICAO, ESTADO-LABEL, DATA-CREATEDAT)
exports.searchAll = (req, res) => {
    const {nome, label, createdAt, createdAt2} = req.body
    Instituicao.findAll ({
        where: {
            [Op.and]: [
                {nome: {[Op.substring]: nome}},
                {createdAt: {[Op.between] : [createdAt, createdAt2]}},
                {ativo: false}
            ] 
        },
        include:[
            { model: Estado, where: {label: {[Op.substring]: label}}}
        ] 
    }).then(instituicao => {
        res.send(instituicao)
    }).catch(err => {
        res.send(err)
    })
}

exports.createOne = async (req, res) => {
    let {nome, telefone, endereco, numero, bairro, cidade, id_estado, cep, cnpj, email, password,descricao} = req.body
    let response = {
        message: '',
        liberado: false
    }
    const cnpjFormat = cnpj.split(",");
    const format = `${cnpjFormat[0]}.${cnpjFormat[1]}.${cnpjFormat[2]}`
    const tipo=1;
    const ativo=false;
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
        descricao,
        id_usuario:user.id,
        cep,
        cnpj:format,
        ativo
    });
    response = {
        message:"Instituição cadastrada com sucesso!",
        instituicao,
        liberado:true
    }
    return res.send(response);
}


//METODO PARA AUTORIZAR UMA INSTITUICAO ATIVAR
exports.autorizationInst = async (req, res) => {
    let {id} = req.body
    let response = {
        message: '',
    }
    const ativo=true;
    const instituicao = await Instituicao.update({ ativo }, {
        where: {
            id
        }
    });

    if(instituicao == 1) {
        response.message = "Instituição autorizada com sucesso!"
    } else {
        response.message = "Instituição não localizada!"
    }
    
    return res.send(response);
}

exports.findByCnpj = async (req,res)=>{
    const {cnpj} = req.body;
    const cnpjFormat = cnpj.split(",");
    const format = `${cnpjFormat[0]}.${cnpjFormat[1]}.${cnpjFormat[2]}`
    const findInst = await Instituicao.findOne({
        where:{cnpj:format},
        include:Usuario
    });
    if(!findInst){
        return res.send({message:"Instituicão não encontrada"});
    }
    const result = {
        message:'Instituição localizada',
        instituicao:{
            nome:findInst.nome,
            telefone:findInst.telefone,
            endereco:findInst.endereco,
            numero:findInst.numero,
            bairro:findInst.bairro,
            cidade:findInst.cidade,
            cep:findInst.cep,
            cnpj:findInst.cnpj,
            descricao:findInst.descricao,
            id_estado:findInst.id_estado,
        },
        usuario:{
            email:findInst.Usuario.email,
            ativo:findInst.Usuario.ativo
        }
    }
    return res.send (result)  
}

exports.remove = async (req,res)=>{
    const {cnpj} = req.body;
    const cnpjFormat =  cnpj.split(',');
    const format = `${cnpjFormat[0]}.${cnpjFormat[1]}.${cnpjFormat[2]}`;
    const findInst = await Instituicao.findOne({where:{cnpj:format}});
    if(!findInst){
        return req.send({message:"Instituição não localizada!"});
    }
    await Usuario.update({ativo:false},{where:{id:findInst.id_usuario}});
    return res.send({message:"Instituição removida com sucesso!"});
}

exports.update = async (req,res) =>{
    const {nome,telefone,endereco,numero,bairro,cidade,cep,cnpj,descricao,email,ativo} = req.body;
    const cnpjFormat =  cnpj.split(',');
    const format = `${cnpjFormat[0]}.${cnpjFormat[1]}.${cnpjFormat[2]}`;
    const findInst = await Instituicao.findOne({where:{cnpj:format}});
    if(!findInst){
        return res.send({message:"Instituição não localizada!"});
    }
    await findInst.update({nome,telefone,endereco,numero,bairro,cidade,cep,descricao});
    await Usuario.update({email,ativo},{where:{id:findInst.id_usuario}});
    return res.send({message:"Instituição atualizada com sucesso!"});
}

exports.findOne = async (req, res) => {
    const {id} = req.body

    let response = {
        message: ''
    }

    try {
        const instituicao = await Instituicao.findOne({
            where: { id },
            include:[
                    {model: Usuario}
            ]
        })

        if(instituicao) {
            response.message = "Institução Localizada!"
            response.instituicao = instituicao
            response.instituicao.Usuario.senha = "***"
        } else {
            response.message = "Instituição Não Localizada!"
        }

    } catch (err) {
        res.send(err)
    }
    res.send(response);
}

//LOCALIZA INSTITUIÇÕES CADASTRADAS QUE AINDA NÃO FORAM
//LIBERADAS PELOS ADMINISTRADORES
exports.searchAllDisable = async (req, res) => {
    const {id, nome} = req.body

    try {
        const instituicao = await Instituicao.findAll({
            where: { 
                 [ Op.and ]: [
                    {nome: {[Op.substring]: nome}},
                    {ativo: 0}
                ] 
            }
        })

        res.send(instituicao);

    } catch (err) {
        res.send(err)
    }
}

//LOCALIZA INSTITUIÇÕES CADASTRADAS QUE AINDA NÃO FORAM
//LIBERADAS PELOS ADMINISTRADORES
exports.listAllDisable = async (req, res) => {

    try {
        const instituicao = await Instituicao.findAll({
            where: { ativo: 0}
        })

        res.send(instituicao);

    } catch (err) {
        res.send(err)
    }
}