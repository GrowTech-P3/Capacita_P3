module.exports = function (app) {
    const noticia = require('../controller/noticiaController.js')
    const {authenticate} = require("../middlewares/authToken")
    app.route('/noticia')
        .get(authenticate,noticia.listAll)
        .post(authenticate,noticia.createOne)
        .put(authenticate,noticia.update)
        .delete(authenticate,noticia.remove)
    app.route('/buscar-noticia')
        .post(authenticate,noticia.findOne)
    app.route('/noticia-pesquisa')
        .post(authenticate,noticia.searchAll)
}