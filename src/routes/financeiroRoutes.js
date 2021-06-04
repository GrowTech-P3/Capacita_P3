const { Router } = require("express");
const routes = new Router();
const { authenticate } = require("../middlewares/authToken");
const financas = require("../controller/financeiroController");
routes.get('/financeiro', authenticate, financas.getPayValue);

module.exports = routes;