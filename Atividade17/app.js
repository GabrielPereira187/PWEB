var app = require('./app/config/server');

var rotaPaginaInicial = require('./app/routes/pagina_inicial');
rotaProfessores(app);

app.listen(3000, function()
{
    console.log("servidor iniciado");
});

var express = require('express');
var consign = require('consign');
var app = express();

app.set('view engine', 'ejs');

app.set('views', './app/views');

consign().include('app/routes').into(app);

module.exports = app;