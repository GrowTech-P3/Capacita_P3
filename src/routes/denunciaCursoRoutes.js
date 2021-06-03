module.exports = function(app) {
    const denunciaCurso = require('../controller/denunciaCursoController.js')
    const {authenticate} = require("../middlewares/authToken")
    app.route('/denunciaCurso')
        .get(denunciaCurso.listAll)
        .post(authenticate, denunciaCurso.defineOne)
    app.route('/denunciaCursoAberta')
    .get(authenticate, denunciaCurso.listAllOpen)


}