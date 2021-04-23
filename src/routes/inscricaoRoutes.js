module.exports = function(app) {
    const inscricao = require('../controller/inscricaoController.js')
    app.route('/inscricao')
        .get(inscricao.listAll)
        .post(inscricao.createOne)
    app.route('/curso_inscritos')
        .post(inscricao.listCursoInscritos)
    app.route('/inscrito_cursos')
        .post(inscricao.listInscritoCursos)
    app.route('/verificar_inscricao')
        .post(inscricao.verificarInscricao)
}