const Deficiencia = require('../models').Tipo_deficiencia

exports.listAll = (req, res) => {
    Deficiencia.findAll ().then(deficiencias => {
        res.send(deficiencias)
    }).catch(err => {
        res.send(err)
    })
}
