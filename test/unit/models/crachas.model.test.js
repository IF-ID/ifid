/*
  crachas.model.test.js

  Esse arquivo testa o modelo da tabela de crachás do banco de dados.

  Requisito:

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/

require('dotenv').config({ path: './src/configs/.env' });

const { test } = require('@jest/globals');
const Crachas = require('../../../src/models/crachas.model.js');

test('Sincronização da Tabela de Crachás', async () => {
  let result = await Crachas.sync({ alter: true });
}, 30000);

test('Modelo da Tabela de Crachas', async () => {
  let table;
  
  try {
    table = await Crachas.describe();
  } catch (error) {
    if (process.env.CREATE_TABLES == 'true') {
      console.log('Criando tabela de crachás...');
      await Crachas.sync({ alter: true });
      table = await Crachas.describe();
    } else {
      console.log('Tabela de cursos não existe. Ative a opção CREATE_TABLES no arquivo .env para criar a tabela.');
      throw error;
    }
  }

  expect(table).toHaveProperty('id_cracha');
  expect(table).toHaveProperty('nome_cracha');
  expect(table).toHaveProperty('matricula_cracha');
  expect(table).toHaveProperty('foto_cracha');
  expect(table).toHaveProperty('imagem_cracha');
  expect(table).toHaveProperty('id_curso');
  expect(table).toHaveProperty('id_usuario');
});