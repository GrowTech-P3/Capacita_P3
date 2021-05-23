const Usuario = require('../models/').Usuario
const UsuarioPcd = require('../models/').Usuario_pcd
const Instituicao = require('../models/').Instituicao
const Administrador = require('../models/').Administrador;
const {getResponseType} = require('../utils/getResponseType');
const { token } = require("../config/secretToken");
const jwt = require('jsonwebtoken');

const bcrypt = require("bcryptjs");

exports.listAll = (req, res) => {
    Usuario.findAll().then(usuarios => {
        res.send(usuarios)
    }).catch(error => {
        res.send(error)
    })
}

exports.createOne = async (req, res) => {
    const { email, password, tipo, ativo } = req.body
    if(await Usuario.findOne({where:{email}})){
        return res.status(400).json({message:"Esse email já foi cadastrado em nosso sistema!"});
    }
    const senha = await bcrypt.hash(password, 8);
    Usuario.create({ email, senha, tipo, ativo }).then(usuario => {
        res.send(usuario)
    }).catch(err => {
        res.send(err)
    })
}

exports.findOne = (req, res) => {
    const { id } = req.body

    let response = {
        message: ''
    }
    Usuario.findOne({
        where: { id },
        include: [
            { model: UsuarioPcd },
            { model: Instituicao },
            { model: Administrador }
        ]
    }).then(usuario => {
        if (usuario == null) {
            response.message = 'Usuário não localizado'
        } else {
            response.message = 'Usuário localizado!'
            response.Usuario = usuario
        }
        res.send(response)
    }).catch(err => {
        res.send(err)
    })

}

exports.login = async (req, res) => {
    const { email, senha } = req.body;

    const user = await Usuario.findOne({ where: { email }});
    if(!user){
        return res.json({message:"Email não encontrado"});
    }

    const resultPassword  = await user.checkoutPassword(senha);
    if(!resultPassword){
        return res.json({message:"Senha inválida"});
    }
    if(user.ativo == false){
        return res.json({message:"Não foi possível realizar o login, Usuário INATIVO!"});
    }
    const { id } = user;
    const resultUser = {
        id: user.id,
        email: user.email,
        tipo: user.tipo,
        ativo: user.ativo,
        Token:  jwt.sign({ id }, token.secret, {
            expiresIn: token.expiresIn
        })
    };
    let response =  getResponseType(resultUser);
    return res.send(response);
}
