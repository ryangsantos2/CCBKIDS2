var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM comum WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT * FROM comum`;

  return database.executar(instrucaoSql);
}

function buscarPorCnpj(cnpj) {
  var instrucaoSql = `SELECT * FROM comum WHERE cnpj = '${cnpj}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(nome_comum, cnpj) {
  var instrucaoSql = `INSERT INTO comum (nome_comum, cnpj) VALUES ('${nome_comum}', '${cnpj}')`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorCnpj, buscarPorId, cadastrar, listar };
