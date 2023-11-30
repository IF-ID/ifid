/*
  cursos.model.test.js

  Esse arquivo testa o modelo da tabela de cursos do banco de dados.

  Requisito:

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/

require('dotenv').config({ path: './src/configs/.env' });

const { test } = require('@jest/globals');
const Cursos = require('../../../src/models/cursos.model.js');

test('Modelo da Tabela de Cursos', async () => {
  let table = await Cursos.describe();

  expect(table).toHaveProperty('id_curso');
  expect(table).toHaveProperty('nome_curso');
  expect(table).toHaveProperty('modalidade_curso');
});