'use strict'

var express = require('express');
var ArticleController = require('../controllers/article');

var router = express.Router();

//Rutas de pruebas
router.post('/datos-curso', ArticleController.datosCurso);
router.get('/test-de-controlador', ArticleController.test);

//Rutas útiles
router.post('/save', ArticleController.save);
router.get('/articles/:last?', ArticleController.getArticles);
router.get('/article/:id', ArticleController.getArticle);
router.put('/update', ArticleController.update);

module.exports = router;
