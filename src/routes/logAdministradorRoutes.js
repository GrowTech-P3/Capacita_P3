const {Router} =  require("express");
const routes = new Router();
const logAdministrador =  require("../controller/logAdministradorController");

routes.post('/log-administrador',logAdministrador.store);

module.exports =  routes;