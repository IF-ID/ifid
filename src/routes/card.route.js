var express = require('express');
var router = express.Router();

var cardController = require('../controllers/card.controller.js');

/* GET home page. */
router.post('/', cardController.gerarCrachas);

module.exports = router;
