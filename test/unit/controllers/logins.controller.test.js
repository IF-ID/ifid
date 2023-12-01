/*
  logins.controller.test.js

  Esse arquivo testa o controller de logins e cadastros.

  Requisito:

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/

require('dotenv').config({ path: './src/configs/.env' });

const { test } = require('@jest/globals');
const Logins = require('../../../src/controllers/logins.controller.js');
const Usuarios = require('../../../src/models/usuarios.model.js');

test('Teste de cadastro de usuário', async () => {
  const user = {
    nome: 'Teste',
    email: 'teste@teste.teste',
    senha: 'teste'
  }
  const result = await Logins.cadastro(user);
  await Usuarios.destroy({ where: { id_usuario: result } });
  expect(result).toBeDefined();
});