const {Router} =  require("express");
const routes = new Router();
const usuarioPcd = require("../controller/usuarioPcdController");
const { authenticate } = require("../middlewares/authToken");


routes.get('/usuarioPcd',usuarioPcd.listAll);
routes.post('/usuarioPcd',authenticate,usuarioPcd.createOne);
routes.post('/buscar-usuariopcd',authenticate,usuarioPcd.findOne);
routes.delete('/usuariopcd',authenticate,usuarioPcd.remove);
routes.post('/usuariopcd/update',authenticate,usuarioPcd.update);

module.exports = routes;