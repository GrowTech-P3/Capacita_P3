const Usuario = require('../models/').Usuario
const UsuarioPcd = require('../models/').Usuario_pcd
const Instituicao = require('../models/').Instituicao
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
            { model: Instituicao }
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

    let response = {
        message: '',
    }

    const user = await Usuario.findOne({ where: { email } });

    user.checkoutPassword(senha);

    response.message = "Instituição Localizada ";
    response.instituicao = user;
    const { id } = user;
    return res.json({
        user: {
            id,
            email,
            tipo: user.tipo
        },
        token: jwt.sign({ id }, token.secret, {
            expiresIn: token.expiresIn
        })
    });
    //res.send(response);

    /*Usuario.findOne({where: {email}}).then(usuario => {
        if(usuario == null) {
            response.message = "Usuário não localizado"
            res.send(response)
        } else {
            if(usuario.senha == senha)) {
                response.usuario = usuario
            } else {
                response.message = "Senha Inválida"
                res.send(response)
            }
            
            //TIPO DE USUARIOS: 0=UsuarioPcd, 1=Instituicao, 3=Administrador
            if(usuario.tipo == 2) {
                response.message = "Usuário Administrador"
                response.admin = null
                res.send(response)
            } else if (usuario.tipo == 1) {
                Instituicao.findOne({where: {id_usuario: usuario.id}}).then(instituicao => {
                    response.message = "Instituição Localizada"
                    response.instituicao = instituicao
                    response.usuario.senha = "***"
                    res.send(response)
                })
            }
            else {
                UsuarioPcd.findOne({where: {id_usuario: usuario.id}}).then(usuarioPcd => {
                    response.message = "UsuárioPcd Localizado"
                    response.usuarioPcd = usuarioPcd
                    response.usuario.senha = "***"
                    res.send(response)
                })
            }
        }
    })*/

}
