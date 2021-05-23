module.exports = function (app) {
    const instituicao = require('../controller/instituicaoController.js')
    const {authenticate} = require("../middlewares/authToken");
    app.route('/instituicao')
        .get(authenticate,instituicao.listAll)
        .post(instituicao.createOne)
    app.route('/instituicao-pesquisa')
        .post(authenticate,instituicao.searchAll)
}