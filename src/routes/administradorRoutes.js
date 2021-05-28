const {Router} =  require("express");
const routes = new Router();
const administrador = require("../controller/administradorController");
const {authenticate}=require("../middlewares/authToken");

routes.post('/administrador',administrador.store);
routes.put('/administrador',administrador.update);
routes.get('/administrador',administrador.index);
routes.delete('/administrador',authenticate,administrador.remove);
routes.get('/administrador/:email',authenticate,administrador.indexById);

module.exports = routes;
