/*
  cursos.model.test.js

  Esse arquivo testa o modelo da tabela de cursos do banco de dados.

  Requisito:

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/

require('dotenv').config({ path: './src/configs/.env' });

const { describe, test } = require('@jest/globals');
const Cursos = require('../../../src/models/cursos.model.js');

describe('Testes do Modelo da Tabela de Cursos', () => {
  test('Modelo da Tabela de Cursos', async () => {
    let table;

    try {
      table = await Cursos.describe();
    } catch (error) {
      throw error;
    } 

    expect(table).toHaveProperty('id_curso');
    expect(table).toHaveProperty('nome_curso');
    expect(table).toHaveProperty('modalidade_curso');
  });
});