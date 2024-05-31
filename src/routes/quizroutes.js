var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarPontuacao", function (req, res) {
    quizController.cadastrarPontuacao(req, res);
})


module.exports = router;