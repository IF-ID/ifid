/*
  database.service.test.js

  Esse arquivo é responsável por testar o serviço de banco de dados.

  Requisito:

  Último Editor: Murilo

  Status: Em desenvolvimento

  Notas:
*/

const { Sequelize } = require('sequelize');
const options = require('../configs/database.config.js');

const database = new Sequelize(
  options.database,
  options.username,
  options.password,
  {
    host: options.host,
    dialect: options.dialect,
    logging: false
  }
);

module.exports = database;