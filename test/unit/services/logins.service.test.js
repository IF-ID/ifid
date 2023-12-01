/*
  logins.service.test.js

  Esse arquivo testa o controller de logins e cadastros.

  Requisito:

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/

require('dotenv').config({ path: './src/configs/.env' });

const { describe, test } = require('@jest/globals');
const Logins = require('../../../src/services/logins.service.js');
const Usuarios = require('../../../src/models/usuarios.model.js');

describe('Testes de Cadastro', () => {
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

  test('Teste de cadastro de usuário com email já cadastrado', async () => {
    const user = {
      nome: 'Teste1.5',
      email: 'teste1.5@teste.teste',
      senha: 'teste1.5'
    }
    const result = await Logins.cadastro(user);
    const result2 = await Logins.cadastro(user);
    await Usuarios.destroy({ where: { id_usuario: result } });
    expect(result).toBeDefined();
    expect(result2).toBeFalsy();
  });
});

describe('Testes de Login', () => {
  test('Teste de login de usuário', async () => {
    const user = {
      nome: 'Teste2',
      email: 'teste2@teste2.teste',
      senha: 'teste2'
    }
    const result = await Logins.cadastro(user);
    const login = await Logins.login(user);
    await Usuarios.destroy({ where: { id_usuario: result } });
    expect(login).toBeTruthy();
  });

  test('Teste de login de usuário com email incorreto', async () => {
    const user = {
      nome: 'Teste2.5',
      email: 'teste2.5@teste.teste',
      senha: 'teste2.5'
    }
    const login = await Logins.login(user);
    expect(login).toBeFalsy();
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
});

describe('Testes de Verficar Logado', () => {
  test('Teste de verificar usuário logado', async () => {
    const user = {
      nome: 'Teste4',
      email: 'teste4@teste.teste',
      senha: 'teste4'
    }
    await Logins.cadastro(user);
    const id = await Logins.login(user);
    const logado = await Logins.verificarLogado(id);
    await Usuarios.destroy({ where: { id_usuario: id } });
    expect(logado).toBeTruthy();
  });

  test('Teste de verificar usuário logado com id incorreto', async () => {
    const loggado = await Logins.verificarLogado(-1);
    expect(loggado).toBeFalsy();
  });
});