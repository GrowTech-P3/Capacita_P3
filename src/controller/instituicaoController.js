const Instituicao = require('../models').Instituicao
const Usuario = require('../models').Usuario
const Curso = require('../models').Curso 
const Tipo_deficiencia = require('../models').Tipo_deficiencia
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

exports.createOne = (req, res) => {
    let {nome, telefone, endereco, numero, bairro, cidade, id_estado, id_usuario, cep, cnpj, ativo, email, senha, tipo} = req.body
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
                await Instituicao.create({nome, telefone, endereco, numero, bairro, cidade, id_estado, id_usuario, cep, cnpj, ativo})
                .then (instituicao => {
                    response.message = "Cadastro Instituição gerado com sucesso!"
                    response.liberado = true
                    response.Instituicao = instituicao
                    console.log('Instituição criada com sucesso!')
                }).catch(err => {
                    res.send(err)
                })
            }).catch(err => {
                res.send(err)
            })
     
        } else if (usuario.email == email.toLowerCase()) {
            usuario.senha = "***"
            response.message = 'E-mail já cadastrado'
            response.Instituicao = usuario
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