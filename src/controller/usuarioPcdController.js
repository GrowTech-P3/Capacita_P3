const UsuarioPcd = require('../models').Usuario_pcd
const Usuario = require('../models').Usuario
const TipoDeficiencia = require('../models').Tipo_deficiencia
const UsuarioDeficiencia = require('../models').Usuario_tipo_deficiencia

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
    let {nome, telefone, endereco, numero, bairro, cidade, id_estado, id_usuario, cep, cpf, ativo, email, senha, tipo, deficiencias} = req.body
    let response = {
        message: '',
        liberado: false
    }
    Usuario.findOne({
        where: {email}
    }).then(async usuario => {
        console.log(usuario)
        if(usuario == null) {
            console.log('Executando criação')
            await Usuario.create({email, senha, ativo, tipo})
            .then(async usuario => {
                id_usuario = usuario.id
                await UsuarioPcd.create({nome, telefone, endereco, numero, bairro, cidade, id_estado, id_usuario, cep, cpf, ativo})
                .then (async usuarioPcd => {
                    var tiposDeficiencias = []

                    for(var i = 0 ; i < deficiencias.length; i++) {
                        var dado = {
                            id_usuario_pcd: usuarioPcd.id,
                            id_tipo_deficiencia: deficiencias[i]
                        }
                        tiposDeficiencias.push(dado)
                    }
                
                    console.log(tiposDeficiencias)

                    await UsuarioDeficiencia.bulkCreate(tiposDeficiencias).then(async usuarioDeficiencias => {
                        usuarioPcd.tiposDeficiencias = usuarioDeficiencias
                    }).catch(err => {
                        res.send(err)
                    })
                    response.message = 'UsuárioPcd criado com sucesso!'
                    response.liberado = true
                    response.usuarioPcd = usuarioPcd
                    console.log('UsuárioPcd criado com sucesso!')
                }).catch(err => {
                    res.send(err)
                })
            }).catch(err => {
                res.send(err)
            })
        } else if (usuario.email == email.toLowerCase()) {
            usuario.senha = "***"
            response.message = 'E-mail já cadastrado'
            response.usuarioPcd = usuario
            console.log('E-mail já cadastrado...')
        } else {
            response.message = 'Erro no cadastro, verificar com Administrador'
            console.log('Erro desconhecido...')
        }
        res.send(response)
    }).catch (err => {
        res.send(err)
    })
}