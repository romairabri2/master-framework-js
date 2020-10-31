'user strict'

//Cargar modulos de node para crear servidor
var express = require('express')
var bodyParser = require('body-parser');

//Ejecutar express (http)
var app = express();

//Cargar ficheros rutas

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS 

//Añadir prefijo a rutas

//Ruta o método de prueba para el API REST
app.get('/probando', (req, res) => {
    return res.status(200).send(`
        <ul>
            <li>NodeJS</li>
            <li>Angular</li>
            <li>React</li>
            <li>Vue</li>
        </ul>
    `);
});

//Exportar modulo (fichero actual)
module.exports = app;