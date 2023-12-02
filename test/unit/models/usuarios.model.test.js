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
    if (process.env.CREATE_TABLES == 'true') {
      console.log('Criando tabela de usuários...');
      await Usuarios.sync({ alter: true });
      table = await Usuarios.describe();
    } else {
      console.log('Tabela de usuários não existe. Ative a opção CREATE_TABLES no arquivo .env para criar a tabela.');
      throw error;
    }
  }

  expect(table).toHaveProperty('id_usuario');
  expect(table).toHaveProperty('nome_usuario');
  expect(table).toHaveProperty('email_usuario');
  expect(table).toHaveProperty('senha_usuario');
});