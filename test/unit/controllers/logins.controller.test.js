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

test('Teste de login de usuário', async () => {
  const user = {
    nome: 'Teste2',
    email: 'teste2@teste2.teste',
    senha: 'teste2'
  }
  const result = await Logins.cadastro(user);
  const login = await Logins.login(user);
  await Usuarios.destroy({ where: { id_usuario: result } });
  expect(login).toBeDefined();
});

test('Teste de login de usuário com senha incorreta', async () => {
  const user = {
    nome: 'Teste3',
    email: 'Teste3@teste3.teste',
    senha: 'teste3'
  }
  const result = await Logins.cadastro(user);
  const login = await Logins.login({ ...user, senha: 'teste4' });
  await Usuarios.destroy({ where: { id_usuario: result } });
  expect(login).toBeFalsy();
});