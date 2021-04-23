const Usuario = require('../models/').Usuario
const UsuarioPcd = require('../models/').Usuario_pcd
const Instituicao = require('../models/').Instituicao

exports.listAll = (req, res) => {
    Usuario.findAll().then(usuarios => {
        res.send(usuarios)
    }).catch(error => {
        res.send(error)
    })
}

exports.createOne = (req, res) => {
    const {email, senha, tipo, ativo} = req.body
    Usuario.create({email, senha, tipo, ativo}).then(usuario => {
        res.send(usuario)
    }).catch(err => {
        res.send(err)
    })
}

exports.findOne = (req, res) => {
    const {id} = req.body

    let response = {
        message: ''
    }

    Usuario.findOne({
        where: {id},
        include: [
            {model: UsuarioPcd},
            {model: Instituicao}
        ]
    }).then(usuario => {
        if(usuario == null) {
            response.message = 'Usuário não localizado'
        } else {
            response.message = 'Usuário localizado!'
            response.Usuario = usuario
        }
        res.send(response)
    }).catch (err => {
        res.send(err)
    }) 

}

exports.login = (req, res) => {
    const {email, senha} = req.body

    let response = {
        message: '',
    }


    Usuario.findOne({where: {email}}).then(usuario => {
        if(usuario == null) {
            response.message = "Usuário não localizado"
            res.send(response)
        } else {
            if(senha == usuario.senha) {
                response.usuario = usuario
            } else {
                response.message = "Senha Inválida"
                res.send(response)
            }
            
            //TIPO DE USUARIOS: 0=UsuarioPcd, 1=Instituicao, 2=Administrador
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
    })
    
}
