const express = require('express')
const app = express()
const hbs = require('hbs');
const nodemailer = require("nodemailer")
require('./hbs/helpers');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//app.use(require(__dirname + '/views/parciales/send-email'));

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


app.post('/send-email', (req, res) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'lillian75@ethereal.email',
            pass: 'yT2EK6XGjRMA4ZNXDb'
        }
    });
    var mailOptions = {
        from: req.body.name,
        to: req.body.email,
        subject: req.body.subject,
        text: req.body.message
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.render('index', {
                alert: true,
                alertTitle: 'Error al enviar',
                alertMessage: error,
                icon: 'error',
                timer: 1500
            })
        } else {
            res.render('index', {
                alert: true,
                alertTitle: 'Mensaje Enviado',
                icon: 'success',
                timer: 1500
            })
        }
    })


})


app.listen(port, () => {
    console.log("Servidor Iniciado, escuchando en el puerto 3000");
})