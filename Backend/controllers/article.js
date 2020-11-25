'use strict'

var validator = require('validator');
const article = require('../models/article');
var Article = require('../models/article');

var controller = {

    datosCurso: (req, res) => {
        var hola = req.body.hola;

        return res.status(200).send({
            curso: 'Master en Frameworks Js',
            autor: 'Victor Robles WEB',
            url: 'victorroblesweb.es',
            hola
        });
    },

    test: (req, res) => {
        return res.status(200).send({
            message: 'Soy la accion test de mi controlador de articulos'
        });
    },

    save: (req, res) => {

        //Recoger parámetros por post
        var params = req.body;
        
        //Validar datos (validator)
        try{
            var validator_title = !validator.isEmpty(params.title);
            var validator_content = !validator.isEmpty(params.content);

        }catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar !!!'
            });
        }

        if(validator_title && validator_content){
            //Crear el Objeto a Guardar
            var article = new Article();

            //Asignar valores
            article.title = params.title;
            article.content = params.content;
            article.image = null;

            //Guardar el artículo
            article.save((err, articleStored) => {
                if(err || !articleStored ){
                    return res.status(404).send({
                        status: 'error',
                        message: 'El artículo no se ha guardado'
                    });
                }

                //Devolver una respuesta
                return res.status(200).send({
                    status: 'success',
                    article: articleStored
                });
            });
           
        }else{
            return res.status(200).send({
                status: 'error',
                message: 'Los datos no son validos!!!'
            });
        }   
    },

    getArticles: (req, res) => {
        var query = Article.find({});
        
        var last = req.params.last;
        if(last || last!= indefined){
            query.limit(2);
        }
        
        //Find
        query.sort('-_id').exec((err, articles)=>{

            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los artículos!!!'
                });
            }

            if(!articles){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos para mostrar !!!'
                });
            }

            return res.status(200).send({
                status: 'success',
                articles
            });
        });       
    }

}; //end controller

module.exports = controller;