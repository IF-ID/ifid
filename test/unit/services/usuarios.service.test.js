/*
  usuarios.service.test.js

  Esse arquivo testa o controller de logins e cadastros.

  Requisito:

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/

require('dotenv').config({ path: './src/configs/.env' });

const { describe, test } = require('@jest/globals');
const Usuarios = require('../../../src/services/usuarios.service.js');

describe('Testes de Criação de Usuarios', () => {
  test('Teste de cadastro de usuário', async () => {
    const user = {
      nome: 'Teste',
      email: 'teste@teste.test',
      senha: 'teste'
    }
    const idUsuario = await Usuarios.criarUsuario(user);
    expect(idUsuario).toBeTruthy();

    await Usuarios.deletarUsuario(idUsuario);
  });

  test('Teste de cadastro de usuário com email já cadastrado', async () => {
    const user = {
      nome: 'Teste1.5',
      email: 'teste1.5@teste.test',
      senha: 'teste1.5'
    }

    const idUsuario = await Usuarios.criarUsuario(user);
    const idUsuario2 = await Usuarios.criarUsuario(user);
    expect(idUsuario).toBeTruthy();
    expect(idUsuario2).toBeFalsy();

    await Usuarios.deletarUsuario(idUsuario);
  });

  test('Teste de cadastro de usuário com nome vazio', async () => {
    const user = {
      nome: '',
      email: 'teste@teste.test',
      senha: 'teste'
    }

    const idUsuario = await Usuarios.criarUsuario(user);
    expect(idUsuario).toBeFalsy();
  });

  test('Teste de cadastro de usuário com email vazio', async () => {
    const user = {
      nome: 'Teste2',
      email: '',
      senha: 'teste'
    }

    const idUsuario = await Usuarios.criarUsuario(user);
    expect(idUsuario).toBeFalsy();
  });

  test('Teste de cadastro de usuário com senha vazia', async () => {
    const user = {
      nome: 'Teste3',
      email: 'teste@teste.test',
      senha: ''
    }

    const idUsuario = await Usuarios.criarUsuario(user);
    expect(idUsuario).toBeFalsy();
  });

  test('Teste de cadastro de usuário com nome, email e senha vazios', async () => {
    const user = {
      nome: '',
      email: '',
      senha: ''
    }

    const idUsuario = await Usuarios.criarUsuario(user);
    expect(idUsuario).toBeFalsy();
  });

  test('Teste de cadastro sem nome', async () => {
    const user = {
      email: 'teste@teste.test',
      senha: 'teste'
    }

    const idUsuario = await Usuarios.criarUsuario(user);
    expect(idUsuario).toBeFalsy();
  });

  test('Teste de cadastro sem email', async () => {
    const user = {
      nome: 'Teste4',
      senha: 'teste'
    }

    const idUsuario = await Usuarios.criarUsuario(user);
    expect(idUsuario).toBeFalsy();
  });

  test('Teste de cadastro sem senha', async () => {
    const user = {
      nome: 'Teste5',
      email: 'teste@teste.test'
    }

    const idUsuario = await Usuarios.criarUsuario(user);
    expect(idUsuario).toBeFalsy();
  });

  test('Teste de cadastro sem nome, email e senha', async () => {
    const user = {}

    const idUsuario = await Usuarios.criarUsuario(user);
    expect(idUsuario).toBeFalsy();
  });

  test('Teste de Cadastro com nome muito longo', async () => {
    const user = {
      nome: 'Teste6'.repeat(100),
      email: 'teste@teste.test',
      senha: 'teste'
    }

    const idUsuario = await Usuarios.criarUsuario(user);
    expect(idUsuario).toBeFalsy();
  });

  test('Teste de Cadastro com email muito longo', async () => {
    const user = {
      nome: 'Teste7',
      email: 'teste'.repeat(100) + '@teste.test',
      senha: 'teste'
    }

    const idUsuario = await Usuarios.criarUsuario(user);
    expect(idUsuario).toBeFalsy();
  });

  test('Teste de Cadastro com senha muito longa', async () => {
    const user = {
      nome: 'Teste8',
      email: 'teste@teste.test',
      senha: 'teste'.repeat(100)
    }
    
    const idUsuario = await Usuarios.criarUsuario(user);
    expect(idUsuario).toBeFalsy();
  });

  test('Teste de Cadastro com nome, email e senha muito longos', async () => {
    const user = {
      nome: 'Teste9'.repeat(100),
      email: 'teste'.repeat(100) + '@teste.test',
      senha: 'teste'.repeat(100)
    }

    const idUsuario = await Usuarios.criarUsuario(user);
    expect(idUsuario).toBeFalsy();
  });

  test('Teste de Cadastro com email inválido', async () => {
    const user = {
      nome: 'Teste10',
      email: 'teste',
      senha: 'teste'
    }

    const idUsuario = await Usuarios.criarUsuario(user);
    expect(idUsuario).toBeFalsy();
  });
});

describe('Testes de Login', () => {
  test('Teste de login de usuário', async () => {
    const user = {
      nome: 'Teste2',
      email: 'teste2@teste2.test',
      senha: 'teste2'
    }

    const idUsuario = await Usuarios.criarUsuario(user);
    const idLogin = await Usuarios.login(user);
    expect(idLogin).toBeTruthy();

    await Usuarios.deletarUsuario(idUsuario);
  });

  test('Teste de login de usuário com email incorreto', async () => {
    const user = {
      nome: 'Teste2.5',
      email: 'teste2.5@teste.test',
      senha: 'teste2.5'
    }
    const idLogin = await Usuarios.login(user);
    expect(idLogin).toBeFalsy();
  });

  test('Teste de login de usuário com senha incorreta', async () => {
    const user = {
      nome: 'Teste3',
      email: 'Teste3@teste3.test',
      senha: 'teste3'
    }
    const idUsuario = await Usuarios.criarUsuario(user);
    const idLogin = await Usuarios.login({ ...user, senha: 'teste4' });
    expect(idLogin).toBeFalsy();

    await Usuarios.deletarUsuario(idUsuario);
  });

  test('Teste de login sem email', async () => {
    const user = {
      senha: 'teste'
    }

    const idLogin = await Usuarios.login(user);
    expect(idLogin).toBeFalsy();
  });

  test('Teste de login sem senha', async () => {
    const user = {
      email: 'teste@tes.test'
    }

    const idLogin = await Usuarios.login(user);
    expect(idLogin).toBeFalsy();
  });

  test('Teste de login sem email e senha', async () => {
    const user = {}

    const idLogin = await Usuarios.login(user);
    expect(idLogin).toBeFalsy();
  });
});

describe('Testes de Verficar Logado', () => {
  test('Teste de verificar usuário logado', async () => {
    const user = {
      nome: 'Teste4',
      email: 'teste4@teste.test',
      senha: 'teste4'
    }
    await Usuarios.criarUsuario(user);
    const id = await Usuarios.login(user);
    const idLogin = await Usuarios.verificarLogado(id);
    expect(idLogin).toBeTruthy();

    await Usuarios.deletarUsuario(id);
  });

  test('Teste de verificar usuário logado com id incorreto', async () => {
    const idLogin = await Usuarios.verificarLogado(-1);
    expect(idLogin).toBeFalsy();
  });
});