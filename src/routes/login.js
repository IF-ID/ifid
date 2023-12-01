var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render("login", { title: "login" });
});

router.get('/new', function(req, res, next) {
  res.render("cadastro", { title: "cadastro" });
});

module.exports = router;
