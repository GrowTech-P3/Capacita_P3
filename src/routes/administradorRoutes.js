const {Router} =  require("express");
const routes = new Router();
const administrador = require("../controller/administradorController") ;

routes.post('/administrador',administrador.store);
routes.put('/administrador',administrador.update);
routes.get('/administrador',administrador.index);
routes.delete('/administrador',administrador.remove);
routes.get('/administrador/id',administrador.indexById);

module.exports = routes;
