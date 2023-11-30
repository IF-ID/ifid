/*
  database.service.test.js

  Esse arquivo é responsável por testar o serviço de banco de dados.

  Requisito:

  Último Editor: Murilo

  Status: finalizado

  Notas:
*/

require('dotenv').config({ path: './src/configs/.env' });

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