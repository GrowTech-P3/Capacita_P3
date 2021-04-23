module.exports = function (app) {
    const usuarioPcd = require('../controller/usuarioPcdController.js')
    app.route('/usuarioPcd')
        .get(usuarioPcd.listAll)
        .post(usuarioPcd.createOne)
    app.route('/buscar-usuariopcd')
        .post(usuarioPcd.findOne)
}