module.exports = function (app) {
    const usuario = require('../controller/usuarioController.js')
    app.route('/usuarios')
        .get(usuario.listAll)
    app.route('/usuario-login')
        .post(usuario.login)
    app.route('/usuario')
        .post(usuario.createOne)
    app.route('/usuario-busca')
        .post(usuario.findOne)
    

}