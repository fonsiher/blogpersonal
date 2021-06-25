const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.urlencoded({ extended: false }));

app.use(require(__dirname + '/views/parciales/send-email'));

app.use(express.static(__dirname + '/public'));

//Establecer el motor para las viwe
hbs.registerPartials(__dirname + '/views/parciales/');
app.set('view engine', 'hbs');

const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.render('', {
        nombre: "edWin herNANdez moYA",
        pagina: 'Home'
    });
});

app.get('/portfolio-details', function(req, res) {
    res.render('portfolio-details', {});
});

app.get('/success', function(req, res) {
    res.render('success', {});
});

app.listen(port, () => {
    console.log("Servidor Iniciado, escuchando en el puerto 3000");
})