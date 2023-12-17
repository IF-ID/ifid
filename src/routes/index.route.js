var express = require('express');
var router = express.Router();

var indexController = require('../controllers/index.controller.js');

/* GET home page. */
router.get('/', indexController.index);
router.get('/politica-de-privacidade', indexController.politicaDePrivacidade);
router.get('/termos-de-uso', indexController.termosDeUso);

module.exports = router;
