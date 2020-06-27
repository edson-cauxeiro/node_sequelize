const express = require('express');
const routes = require('./routes');

//Chamando a Conexão com Base de Dados
require('./database');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);