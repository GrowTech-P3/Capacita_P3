module.exports = function(app) {
    const deficiencia = require('../controller/deficienciaController.js')
    app.route('/deficiencia')
        .get(deficiencia.listAll)
}