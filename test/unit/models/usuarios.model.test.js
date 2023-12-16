/*
  usuarios.model.test.js

  Esse arquivo testa o modelo da tabela de usuários do banco de dados.

  Requisito:

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/

require('dotenv').config({ path: './src/configs/.env' });

const { test } = require('@jest/globals');
const Usuarios = require('../../../src/models/usuarios.model.js');

test('Modelo da Tabela de Usuários', async () => {
  let table = null;

  try {
    table = await Usuarios.describe();
  } catch (error) {
    throw error;
  }

  expect(table).toHaveProperty('id_usuario');
  expect(table).toHaveProperty('nome_usuario');
  expect(table).toHaveProperty('email_usuario');
  expect(table).toHaveProperty('senha_usuario');
});