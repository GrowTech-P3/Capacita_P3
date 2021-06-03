const UsuarioPcd = require('../models').Usuario_pcd
const Usuario = require('../models').Usuario
const TipoDeficiencia = require('../models').Tipo_deficiencia
const UsuarioDeficiencia = require('../models').Usuario_tipo_deficiencia
const bcrypt = require("bcryptjs");

exports.listAll = (req, res) => {
    UsuarioPcd.findAll().then(usuariosPcd => {
        res.send(usuariosPcd)
    }).catch(err => {
        res.send(err)
    })
}

exports.findOne = async (req, res) => {
    const { cpf } = req.body
    const cpfFormat = cpf.split(",");
    const format = `${cpfFormat[0]}.${cpfFormat[1]}.${cpfFormat[2]}`
    const usuarioPCD = await UsuarioPcd.findOne({
        where: { cpf:format },
        include: [
            { model: TipoDeficiencia },
            { model: Usuario }
        ]
    })
    if(!usuarioPCD){
        return res.send({message:"Usuário PCD não encontrado!"});
    }
    let deficiencia = [];

    usuarioPCD.Tipo_deficiencia.forEach(index => {
        deficiencia.push(index.id);
    })
    const response = {
        message:"Usuário PCD localizado",
        usuarioPCD:{
            id:usuarioPCD.id,
            nome: usuarioPCD.nome,
            telefone:usuarioPCD.telefone ,
            endereco:usuarioPCD.endereco ,
            numero: usuarioPCD.numero,
            bairro: usuarioPCD.bairro,
            cidade: usuarioPCD.cidade,
            id_estado: usuarioPCD.id_estado,
            cep: usuarioPCD.cep,
            cpf: usuarioPCD.cpf,
            ativo:usuarioPCD.ativo,
            deficiencia
        },
        usuario:{
            email:usuarioPCD.Usuario.email,
            tipo:usuarioPCD.Usuario.tipo,
            ativo:usuarioPCD.Usuario.ativo
        },   
    }
    return res.send(response);
}

exports.createOne = async (req, res) => {
    let { nome, telefone, endereco, numero, bairro, cidade, id_estado, cep, cpf, email, password, deficiencias } = req.body
    const cpfFormat = cpf.split(",");
    const format = `${cpfFormat[0]}.${cpfFormat[1]}.${cpfFormat[2]}`
    const userExists = await Usuario.findOne({ where: { email } });
    if (userExists) {
        return res.json({ message: "Email já cadastrado!" });
    }
    const senha = await bcrypt.hash(password, 8);
    const ativo = true;
    const tipo = 0;
    const user = await Usuario.create({ email, senha, ativo, tipo });
    const userPcd = await UsuarioPcd.create({
        nome,
        telefone,
        endereco,
        numero,
        bairro,
        cidade,
        id_estado,
        id_usuario: user.id,
        cep,
        cpf:format,
        ativo
    });
    const tiposDefiencias = [];
    deficiencias.forEach(index => {
        if (index && index != 0) {
            const dado = {
                id_usuario_pcd: userPcd.id,
                id_tipo_deficiencia: index
            }
            tiposDefiencias.push(dado)
        }
    });
    const resultTiposDeficiencias = await UsuarioDeficiencia.bulkCreate(tiposDefiencias);

    const usuarioPcd = {
        idUsuarioPcd: userPcd.id,
        usuario: user,
        nome,
        telefone,
        endereco,
        numero,
        bairro,
        cidade,
        id_estado,
        cep,
        cpf,
        ativo,
        tiposDeficiencias: resultTiposDeficiencias
    }
    const response = {
        message: "Usuário PCD Cadastrado com sucesso!",
        liberado: true,
        usuarioPcd
    }
    return res.send(response);
}


exports.remove = async (req,res) => {
    const {cpf} = req.body;
    const cpfFormat = cpf.split(",");
    const format = `${cpfFormat[0]}.${cpfFormat[1]}.${cpfFormat[2]}`
    const userPCD = await UsuarioPcd.findOne({where:{cpf:format}});
    if(!userPCD){
        return res.send({message:"Usuário não encontado!"});
    }
    const user = await Usuario.findOne({where:{id:userPCD.id_usuario}});
    await userPCD.update({ativo:false});
    await user.update({ativo:false});
    return res.send({message:"Usuário deletado!"});
}

exports.update = async (req,res) => {
    const {nome,endereco,cidade,bairro,id_estado,cpf,telefone,cep,email,numero,ativo} = req.body;
    const cpfFormat = cpf.split(",");
    const format = `${cpfFormat[0]}.${cpfFormat[1]}.${cpfFormat[2]}`
    const userPCD = await UsuarioPcd.findOne({where:{cpf:format}});
    if(!userPCD){
        return res.send({message:"Usuário não encontrado"});
    }
    await userPCD.update({nome,endereco,cidade,bairro,id_estado,cpf:format,telefone,cep,numero,ativo});
    await Usuario.update({email,ativo},{where:{id:userPCD.id_usuario}});
    return res.send({message:"Usuário atualizado!"});
}