module.exports = function (app) {
    const estados = require('../controller/estadosController.js')
    app.route('/estados')
        .get(estados.listAll)
}