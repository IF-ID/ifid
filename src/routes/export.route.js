var express = require('express');
var router = express.Router();

var exportController = require('../controllers/export.controller.js');

router.post('/jpg', exportController.exportJPG);
router.post('/pdf', exportController.exportPDF);

module.exports = router;
