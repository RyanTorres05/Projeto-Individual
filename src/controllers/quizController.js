var quizModel = require("../models/quizModel");

function cadastrarPontuacao(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idUsuario = req.body.idUsuarioServer;
    var qtdAcertos = req.body.qtdAcertosServer;
   
    // Faça as validações dos valores
    

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.cadastrarPontuacao(idUsuario, qtdAcertos)
            .then(
                function (resultado) {
                    res.json(resultado);   
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


module.exports = {
    cadastrarPontuacao
}