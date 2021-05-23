const UsuarioPcd = require('../models').Usuario_pcd
const Usuario = require('../models').Usuario
const TipoDeficiencia = require('../models').Tipo_deficiencia
const UsuarioDeficiencia = require('../models').Usuario_tipo_deficiencia
const bcrypt =  require("bcryptjs");

exports.listAll = (req, res) => {
    UsuarioPcd.findAll ().then(usuariosPcd => {
        res.send(usuariosPcd) 
    }).catch(err => {
        res.send(err)
    })
}

exports.findOne = (req, res) => {
    const {id} = req.body
    UsuarioPcd.findOne({
        where: {id},
        include: TipoDeficiencia
    }).then(usuario => {
        res.send(usuario)
    }).catch(err => {
        res.send(err)
    })
}

exports.createOne = async (req, res) => {
    let {nome, telefone, endereco, numero, bairro, cidade, id_estado, cep, cpf,  email, password, deficiencias} = req.body
    const userExists= await Usuario.findOne({where:{email}});
    if(userExists){
        return res.json({message:"Email já cadastrado!"});
    }
    const senha = await bcrypt.hash(password,8); 
    const ativo = true;
    const tipo = 0;
    const user = await Usuario.create({email,senha,ativo,tipo});
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
        cpf,
        ativo
    });
    const tiposDefiencias = [];
    deficiencias.forEach(index =>{
        if(index && index != 0){
            const dado = {
                id_usuario_pcd: userPcd.id,
                id_tipo_deficiencia: index
            }
            tiposDefiencias.push(dado)
        }
    });
    const resultTiposDeficiencias = await UsuarioDeficiencia.bulkCreate(tiposDefiencias);
    
    const usuarioPcd = {
        idUsuarioPcd:userPcd.id,
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
        tiposDeficiencias:resultTiposDeficiencias
    }
    const response = {
        message:"Usuário PCD Cadastrado com sucesso!",
        liberado:true,
        usuarioPcd
    }
    return res.send(response);
}