const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const port = 5000

var app = express()
app.use(router)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

router.get('carrera', function(req, res) {
    res.send('Lista de carreras de la UPS')
})

router.post('/carrera', function(req, res) {
    console.log(req.body)
    console.log(req.query)

    res.status(201).send({ tipo_error: 0, mensaje_error: '', mensaje_exito: 'Añadido exitosamente' })
})

app.use('/', express.static('public'))

app.listen(port)
console.log('la app está escuchando en http://localhost:' + port)