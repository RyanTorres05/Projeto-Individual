var database = require("../database/config");

function buscarUltimasMedidas() {

    var instrucaoSql = `SELECT p.qtdAcertos, u.nome, COUNT(*) as quantidade
    FROM pontuacao p
    JOIN usuario u ON p.fkUsuario = u.idUsuario
    GROUP BY p.qtdAcertos, u.nome;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// function buscarMedidasEmTempoReal(idAquario) {

//     var instrucaoSql = `SELECT 
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,
//                         DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
//                         fk_aquario 
//                         FROM medida WHERE fk_aquario = ${idAquario} 
//                     ORDER BY id DESC LIMIT 1`;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

module.exports = {
    buscarUltimasMedidas,
    // buscarMedidasEmTempoReal
}