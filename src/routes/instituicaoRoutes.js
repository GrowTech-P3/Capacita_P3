module.exports = function (app) {
    const instituicao = require('../controller/instituicaoController.js')
    app.route('/instituicao')
        .get(instituicao.listAll)
        .post(instituicao.createOne)
    app.route('/instituicao-pesquisa')
        .post(instituicao.searchAll)
}