const {Router} =  require("express");
const routes = new Router();
const {authenticate} = require("../middlewares/authToken");
const logAdministrador =  require("../controller/logAdministradorController");

routes.post('/log',authenticate,logAdministrador.store);
routes.get('/log',authenticate,logAdministrador.index);
routes.get('/log/:id_administrador',authenticate,logAdministrador.indexById);

module.exports =  routes;