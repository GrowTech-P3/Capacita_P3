module.exports = function(app) {
    const denunciaCurso = require('../controller/denunciaCursoController.js')
    const {authenticate} = require("../middlewares/authToken")
    app.route('/denunciaCurso')
        .get(authenticate, denunciaCurso.listAll)
        .post(authenticate, denunciaCurso.defineOne)
    app.route('/denunciaCursoAberta')
        .get(authenticate, denunciaCurso.listAllOpen)
    app.route('/denunciaCursoPesquisa')
        .post(authenticate, denunciaCurso.searchAll)
}