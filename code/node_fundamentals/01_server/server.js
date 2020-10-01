const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const port = 5000;
const response = require('./network/response.js');

var app = express()
app.use(router)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

router.get('/carrera', function(req, res) {
    response.success(req, res, 'Lista de carreras de la UPS ', 200);
});

router.post('/carrera', function(req, res) {
    if (req.query.error == 'ok') {
        response.error(req, res, 'Error al ingresar la carrera', 500);
    } else {
        response.success(req, res, 'Ingreso de carrera exitosa ', 201);
    }
});

app.use('/', express.static('public'))

app.listen(port);
console.log('la app está escuchando en http://localhost:' + port);