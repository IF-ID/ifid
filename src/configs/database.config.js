/*
  database.config.js

  Esse arquivo é responsável por armazenar as configurações de conexão com o banco de dados.
  As configurações são armazenadas em variáveis de ambiente, caso não existam, são utilizados os valores padrões.
  O uso dos valores padrões é recomendado apenas para desenvolvimento.

  Requisito: 

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/

const env = process.env;
const database = {
  host: env.DB_HOST || 'localhost',
  port: env.DB_PORT || '3306',
  database: env.DB_NAME || 'ifid',
  username: env.DB_USER || 'root',
  password: env.DB_PASSWORD || '',
  dialect: env.DB_DIALECT || 'mysql'
};

module.exports = database;