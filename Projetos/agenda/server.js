// Carrega variáveis de ambiente do arquivo .env
require("dotenv").config()

// Importa os módulos necessários
const express = require('express');
const app = express();
const mongoose = require("mongoose")

// Conecta ao banco de dados MongoDB usando a string de conexão do arquivo .env
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {app.emit('pronto')}) // Emite um evento 'pronto' quando a conexão é bem-sucedida
    .catch((e) => console.log(e)) // Captura e exibe erros de conexão

const session = require("express-session")
const MongoStore = require("connect-mongo")
const flash = require("connect-flash")

const routes = require('./routes');
const path = require('path');
const helmet = require('helmet')
const csrf = require('csurf')
const { middlewareGlobal, outroMiddleware, checkCsrfError, csrfMiddleware } = require('./src/middleware/middleware');

// Adiciona segurança básica com o Helmet
app.use(helmet())

// Permite o parse de dados URL-encoded
app.use(express.urlencoded({ extended: true }));

// Permite o parse de dados JSON
app.use(express.json())

// Define a pasta pública para servir arquivos estáticos
app.use(express.static(path.resolve(__dirname, 'public')));

// Configura as opções de sessão
const sessionOptions = session({
    secret: "akasdfj0út23453456+54qt23qv  qwf qwer qwer qwer asdasdasda a6()",
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }), // Armazena sessões no MongoDB
    resave: false, // Não salva a sessão novamente se não houve modificações
    saveUninitialized: false, // Não salva sessões não inicializadas
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // Define a validade do cookie para 7 dias
        httpOnly: true // Torna o cookie inacessível via JavaScript no cliente
    }
})

// Usa as opções de sessão configuradas
app.use(sessionOptions)

// Usa o middleware flash para mensagens de sessão temporárias
app.use(flash())

// Configura o diretório de views e a engine de views EJS
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Protege contra ataques CSRF
app.use(csrf())
app.use(checkCsrfError); // Middleware para verificar erros CSRF
app.use(csrfMiddleware); // Middleware para adicionar token CSRF aos formulários
app.use(middlewareGlobal); // Middleware global personalizado
app.use(outroMiddleware); // Outro middleware personalizado
app.use(routes); // Usa as rotas definidas no arquivo routes

// Inicia o servidor após a conexão com o banco de dados ser estabelecida
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });    
})
