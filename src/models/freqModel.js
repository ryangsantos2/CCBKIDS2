var database = require("../database/config")

function armazenar(idFilho, falta, presenca){
    var instrucaoSql = `INSERT INTO frequencia(fkFilho,falta,presenca) VALUES
	('${idFilho}', '${falta}', '${presenca}');`;

  return database.executar(instrucaoSql);
}

module.exports = {
    armazenar
};


