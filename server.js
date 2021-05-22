const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

//O APP VAI USAR O BODYPARSER PARA INTERPRETAR PARÂMETROS DE ROTA E REQUISÇÃO
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()) //PARA TRABALHAR O CONTEÚDO EM FORMATO JSON
app.use(cors()) //EVITA ERRO DE REFERÊNCIA CRUZADA UTILIZANDO PERSISTÊNCIA LOCAL
app.use(express.static('public')) // ATIVA COMPARTILHAMENTO DE ARQUIVOS ESTÁTICOS NA PASTA PUBLIC

//IMPORTAÇÃO DOS ARQUIVOS DE ROTAS
const routesUsuario             = require('./src/routes/usuarioRoutes.js')
const routesUsuarioPcd          = require('./src/routes/usuarioPcdRoutes.js')
const routesInstituicao         = require('./src/routes/instituicaoRoutes.js')
const routesEstados             = require('./src/routes/estadosRoutes.js')
const routesUsuarioDeficiencia  = require('./src/routes/usuarioDeficienciaRoutes.js')
const routesCurso               = require('./src/routes/cursoRoutes.js')
const routesDeficiencia         = require('./src/routes/deficienciaRoutes.js')
const routesInscricao           = require('./src/routes/inscricaoRoutes.js')
const routesAdministrador =  require('./src/routes/administradorRoutes');
const routesLogAdministrador = require('./src/routes/logAdministradorRoutes');

//REPASSE DE INSTÂNCIA DO EXPRESS PARA AS ROTAS
app.use(routesUsuario);
app.use(routesAdministrador);
app.use(routesLogAdministrador);
app.use(routesUsuarioPcd);
routesInstituicao(app)
routesEstados(app)
routesUsuarioDeficiencia(app)
routesCurso(app)
routesDeficiencia(app)

// ## Observar
routesInscricao(app);

//ROTA RAIZ
app.route('/')
    .get((req, res) => {
        res.send('API ToDoList funcionando!')
    })

//ROTA PADRÃO 3000    
const port = process.env.PORT || 3000
app.listen(port)

console.log("O servidor rodando na porta: ", port)
