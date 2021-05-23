module.exports = function (app) {
    const instituicao = require('../controller/instituicaoController.js')
    const {authenticate} = require("../middlewares/authToken");
    app.route('/instituicao')
        .get(authenticate,instituicao.listAll)
        .post(authenticate,instituicao.createOne)
    app.route('/busca-instituicao')
        .post(authenticate,instituicao.findOne)
    app.route('/instituicao-pesquisa')
        .post(authenticate,instituicao.searchAll)
    app.route('/busca-instituicao-inativa')
        .get(authenticate,instituicao.listAllDisable)
        .post(authenticate,instituicao.searchAllDisable)
    app.route('/instituicao-liberacao')
        .post(authenticate,instituicao.autorizationInst)

}