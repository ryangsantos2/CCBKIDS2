var database = require("../database/config")

function armazenar(usuario, falta, presenca){
    var instrucaoSql = `INSERT INTO frequencia(fkUser,falta,presenca) VALUES
	('${usuario}', '${falta}', '${presenca}');`;

  return database.executar(instrucaoSql);
}

module.exports = {
    armazenar
};


