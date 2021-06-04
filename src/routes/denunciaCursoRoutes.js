module.exports = function(app) {
    const denunciaCurso = require('../controller/denunciaCursoController.js')
    const {authenticate} = require("../middlewares/authToken")
    app.route('/denunciaCurso')
        .get(authenticate, denunciaCurso.listAll)
        .post(authenticate, denunciaCurso.defineOne)
    app.route('/denunciaCurso-aberta')
        .get(authenticate, denunciaCurso.listAllOpen)
    app.route('/denunciaCurso-busca')
        .post(authenticate, denunciaCurso.findOne)
    app.route('/denunciaCurso-pesquisa')
        .post(authenticate, denunciaCurso.searchAll)
    app.route('/denunciaCurso-fechar')
        .post(authenticate, denunciaCurso.autorizationDenunciaCursoClose)
    app.route('/denunciaCurso-fechar-curso-inativo')
        .post(authenticate, denunciaCurso.autorizationDenunciaCursoCloseCursoDisable)
}