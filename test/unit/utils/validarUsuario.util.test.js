/*
  validarUsuario.util.test.js

  Esse arquivo é responsável por armazenar os testes do serviço de usuarios.

  Requisito:

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/

const { describe, test } = require('@jest/globals');
const { validarUsuario } = require('../../../src/utils/validarDados.util.js');

describe('Testes de Validação de Usuário Com algum Campo Vazio', () => {
  test('Validação de Usuário sem o campo nome', () => {
    const usuario = {
      email: 'teste@teste.com',
      senha: 'teste'
    }

    const validacao = validarUsuario(usuario);
    expect(validacao).toBeFalsy();
  });

  test('Validação de Usuário sem o campo email', () => {
    const usuario = {
      nome: 'Teste',
      senha: 'teste'
    }

    const validacao = validarUsuario(usuario);
    expect(validacao).toBeFalsy();
  });

  test('Validação de Usuário sem o campo senha', () => {
    const usuario = {
      nome: 'Teste',
      email: 'teste@teste.com'
    }

    const validacao = validarUsuario(usuario);
    expect(validacao).toBeFalsy();
  });

  test('Validação de Usuário sem os campos nome, email e senha', () => {
    const usuario = {}

    const validacao = validarUsuario(usuario);
    expect(validacao).toBeFalsy();
  });

  test('Validação de Usuário com email vazio', () => {
    const usuario = {
      nome: 'Teste',
      email: '',
      senha: 'teste'
    }

    const validacao = validarUsuario(usuario);
    expect(validacao).toBeFalsy();
  });

  test('Validação de Usuário com senha vazia', () => {
    const usuario = {
      nome: 'Teste',
      email: 'teste@teste.teste',
      senha: ''
    }

    const validacao = validarUsuario(usuario);
    expect(validacao).toBeFalsy();
  });

  test('Validação de Usuário com todos os campos vazios', () => {
    const usuario = {
      nome: '',
      email: '',
      senha: ''
    }

    const validacao = validarUsuario(usuario);
    expect(validacao).toBeFalsy();
  });
});

describe('Testes de Validação de Usuário Com algum Campo Inválido', () => {
  test('Campo nome é muito longo', () => {
    const usuario = {
      nome: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna in aliquet aliquam, justo elit aliquam elit, nec aliquet elit elit nec elit.',
      email: 'teste@teste.teste',
      senha: 'teste'
    }

    const validacao = validarUsuario(usuario);
    expect(validacao).toBeFalsy();
  });

  test('Campo email é muito longo', () => {
    const usuario = {
      nome: 'Teste',
      email: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna in aliquet aliquam, justo elit aliquam elit, nec aliquet elit elit nec elit@teste.teste',
      senha: 'teste'
    }

    const validacao = validarUsuario(usuario);
    expect(validacao).toBeFalsy();
  });

  test('Campo senha é muito longo', () => {
    const usuario = {
      nome: 'Teste',
      email: 'teste@teste.com',
      senha: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna in aliquet aliquam, justo elit aliquam elit, nec aliquet elit elit nec elit'
    }

    const validacao = validarUsuario(usuario);
    expect(validacao).toBeFalsy();
  });

  test('Todos os campos são muito longos', () => {
    const usuario = {
      nome: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna in aliquet aliquam, justo elit aliquam elit, nec aliquet elit elit nec elit.',
      email: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna in aliquet aliquam, justo elit aliquam elit, nec aliquet elit elit nec elit@teste.teste',
      senha: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna in aliquet aliquam, justo elit aliquam elit, nec aliquet elit elit nec elit'
    }

    const validacao = validarUsuario(usuario);
    expect(validacao).toBeFalsy();
  });

  test('Email não segue a estrutura de um email', () => {
    const usuario = {
      nome: 'Teste',
      email: 'teste',
      senha: 'teste'
    }

    const validacao = validarUsuario(usuario);
    expect(validacao).toBeFalsy();
  });
});

test('Validação de Usuário com nome, email e senha preenchidos', () => {
  const usuario = {
    nome: 'Teste',
    email: 'teste@teste.com',
    senha: 'teste'
  }

  const validacao = validarUsuario(usuario);
  expect(validacao).toBeTruthy();
});

