/*
  database.service.test.js

  Esse arquivo é responsável por testar o serviço de banco de dados.

  Requisito:

  Último Editor: Murilo

  Status: finalizado

  Notas:
*/

require('dotenv').config({ path: './src/configs/.env' });

console.log(process.env.DB_HOST);
console.log(process.env.DB_PORT);
console.log(process.env.DB_NAME);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_DIALECT);

const { test } = require('@jest/globals');
const databaseOptions = require('../../../src/configs/database.config.js');
const database = require('../../../src/services/database.service.js');

test('Configurações do Banco de Dados', () => {
  expect(databaseOptions).toHaveProperty('host');
  expect(databaseOptions).toHaveProperty('port');
  expect(databaseOptions).toHaveProperty('database');
  expect(databaseOptions).toHaveProperty('username');
  expect(databaseOptions).toHaveProperty('password');
  expect(databaseOptions).toHaveProperty('dialect');
});

test('Conectar ao Banco de Dados', async () => {
  await database.authenticate();
});