const {Router} = require("express");
const routes = new Router();
const {authenticate}=require("../middlewares/authToken");
routes.get('/financeiro', authenticate);


module.exports = routes;