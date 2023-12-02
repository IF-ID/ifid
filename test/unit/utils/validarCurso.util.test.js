/*
  validarCurso.util.test.js

  Esse arquivo é responsável por armazenar os testes do serviço de cursos.

  Requisito:

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/

const { describe, test } = require('@jest/globals');
const { validarCurso } = require('../../../src/utils/validarDados.util.js');

describe('Testes de Validação de Curso Com algum Campo Faltando', () => {
  test('Validação de Curso sem o campo nome', () => {
    const curso = {
      modalidade: 'Teste',
    }

    const validacao = validarCurso(curso);
    expect(validacao).toBeFalsy();
  });

  test('Validação de Curso sem o campo modalidade', () => {
    const curso = {
      nome: 'Teste',
    }

    const validacao = validarCurso(curso);
    expect(validacao).toBeFalsy();
  });

  test('Validação de Curso sem os campos nome e modalidade', () => {
    const curso = {}

    const validacao = validarCurso(curso);
    expect(validacao).toBeFalsy();
  });
});

describe('Testes de Validação de Curso Com algum Campo Vazio', () => {
  test('Validação de Curso com nome vazio', () => {
    const curso = {
      nome: '',
      modalidade: 'Teste2',
    }

    const validacao = validarCurso(curso);
    expect(validacao).toBeFalsy();
  });

  test('Validação de Curso com modalidade vazia', () => {
    const curso = {
      nome: 'Teste',
      modalidade: '',
    }

    const validacao = validarCurso(curso);
    expect(validacao).toBeFalsy();
  });

  test('Validação de Curso com nome e modalidade vazios', () => {
    const curso = {
      nome: '',
      modalidade: '',
    }

    const validacao = validarCurso(curso);
    expect(validacao).toBeFalsy();
  });
});

describe('Testes de Validação de Curso Com algum Campo Muito Longo', () => {
  test('Validação de Curso com nome muito longo', () => {
    const curso = {
      nome: 'Teste'.repeat(100),
      modalidade: 'Teste',
    }

    const validacao = validarCurso(curso);
    expect(validacao).toBeFalsy();
  });

  test('Validação de Curso com modalidade muito longa', () => {
    const curso = {
      nome: 'Teste',
      modalidade: 'Teste'.repeat(100),
    }

    const validacao = validarCurso(curso);
    expect(validacao).toBeFalsy();
  });

  test('Validação de Curso com nome e modalidade muito longos', () => {
    const curso = {
      nome: 'Teste'.repeat(100),
      modalidade: 'Teste'.repeat(100),
    }

    const validacao = validarCurso(curso);
    expect(validacao).toBeFalsy();
  });
});

test('Validação de Curso com nome e modalidade preenchidos', () => {
  const curso = {
    nome: 'Teste',
    modalidade: 'Teste',
  }

  const validacao = validarCurso(curso);
  expect(validacao).toBeTruthy();
});