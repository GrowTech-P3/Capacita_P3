const { Router } = require("express");
const routes = new Router();
const { authenticate } = require("../middlewares/authToken");
const financas = require("../controller/financeiroController");

routes.get('/financeiro', authenticate, financas.getPayValue);
routes.post('/financeiro/instituicao',authenticate,financas.getInstituicao);
routes.post('/financeiro/cursos',authenticate,financas.getCurso);
routes.post('/financeiro/instituicao/cursos',authenticate,financas.getCursoInst);

module.exports = routes;