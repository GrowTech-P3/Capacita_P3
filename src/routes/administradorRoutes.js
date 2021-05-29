const {Router} =  require("express");
const routes = new Router();
const administrador = require("../controller/administradorController");
const {authenticate}=require("../middlewares/authToken");

routes.post('/administrador',administrador.store);
routes.post('/administradors',authenticate,administrador.update);
routes.post('/administrador/password',authenticate,administrador.updatePassword);
routes.get('/administrador',administrador.index);
routes.delete('/administrador',authenticate,administrador.remove);
routes.get('/administrador/:email',authenticate,administrador.indexById);

module.exports = routes;
