const UsuarioDeficiencia = require('../models').Usuario_tipo_deficiencia

exports.bulkCreate = (req, res) => {
    const request  = req.body

    UsuarioDeficiencia.bulkCreate(request).then(usuarioDeficiencia => {
        res.send(usuarioDeficiencia)
    }).catch(err => {
        res.send(err)
    })
}

exports.findAllUsuarioDeficiencias = (req, res) => {
    const {id_usuario_pcd} = req.body
    UsuarioDeficiencia.findAll({
        where: {
            id_usuario_pcd
        }
    }).then(response => {
        res.send(response)
    }).catch(err => {
        res.send(err)
    })
}

exports.findAll = (req, res) => {
    const {id_usuario_pcd} = req.body
    
    let response = {
        message: ''
    }
    
    UsuarioDeficiencia.findAll({where: {id_usuario_pcd}}).then(usuarioDeficiencia => {
        if(usuarioDeficiencia == null) {
            response.message = 'Tipos de deficiência do usuário não localizado'
            res.send(response)
        } else {
            response.message = "Tipo(s) de deficiência(s) do usuário localizado(s)."
            response.usuarioDeficiencia = usuarioDeficiencia
            res.send(response)
        }
    })
}