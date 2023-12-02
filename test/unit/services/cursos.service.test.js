/*
  cursos.service.test.js

  Testes de cadastro de cursos

  Requisito:

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/

require('dotenv').config({ path: './src/configs/.env' });

const { describe, test } = require('@jest/globals');
const Cursos = require('../../../src/services/cursos.service.js');

describe('Testes de Cadastro de Curso', () => {
  test('Cadasto de Curso Novo', async () => {
    const curso = {
      nome: 'Teste',
      modalidade: 'Teste',
    }

    const idCurso = await Cursos.criarCurso(curso);
    expect(idCurso).toBeTruthy();

    await Cursos.deletarCurso(idCurso);
  });

  test('Cadastro de Curso com nome já cadastrado', async () => {
    const curso = {
      nome: 'Teste2',
      modalidade: 'Teste2',
    }

    const idCurso = await Cursos.criarCurso(curso);
    const idCurso2 = await Cursos.criarCurso(curso);
    expect(idCurso2).toBeFalsy();

    await Cursos.deletarCurso(idCurso);
    await Cursos.deletarCurso(idCurso2);
  });

  test('Cadastro de Curso com nome vazio', async () => {
    const curso = {
      nome: '',
      modalidade: 'Teste2',
    }

    const idCurso = await Cursos.criarCurso(curso);
    expect(idCurso).toBeFalsy();
  });

  test('Cadastro de Curso com modalidade vazia', async () => {
    const curso = {
      nome: 'Teste2',
      modalidade: '',
    }

    const idCurso = await Cursos.criarCurso(curso);
    expect(idCurso).toBeFalsy();
  });

  test('Cadastro de Curso com nome e modalidade vazios', async () => {
    const curso = {
      nome: '',
      modalidade: '',
    }

    const idCurso = await Cursos.criarCurso(curso);
    expect(idCurso).toBeFalsy();
  });

  test('Cadastro de Curso sem nome', async () => {
    const curso = {
      modalidade: 'Teste2',
    }

    const idCurso = await Cursos.criarCurso(curso);
    expect(idCurso).toBeFalsy();
  });

  test('Cadastro de Curso sem modalidade', async () => {
    const curso = {
      nome: 'Teste2',
    }

    const idCurso = await Cursos.criarCurso(curso);
    expect(idCurso).toBeFalsy();
  });

  test('Cadastro de Curso sem nome e modalidade', async () => {
    const curso = {}

    const idCurso = await Cursos.criarCurso(curso);
    expect(idCurso).toBeFalsy();
  });
});

describe('Testes de Busca de Curso', () => {
  test('Busca de Curso Existente', async () => {
    const curso = {
      nome: 'Teste3',
      modalidade: 'Teste3',
    }

    const idCurso = await Cursos.criarCurso(curso);
    const cursoBuscado = await Cursos.getCurso(idCurso);
    expect(cursoBuscado).toBeTruthy();

    await Cursos.deletarCurso(idCurso);
  });

  test('Busca de Curso Inexistente', async () => {
    const cursoBuscado = await Cursos.getCurso(0);
    expect(cursoBuscado).toBeFalsy();
  });
});

describe('Testes de Deleção de Curso', () => {
  test('Deleção de Curso Existente', async () => {
    const curso = {
      nome: 'Teste3',
      modalidade: 'Teste3',
    }

    const idCurso = await Cursos.criarCurso(curso);
    const deletado = await Cursos.deletarCurso(idCurso);
    expect(deletado).toBeTruthy();
  });

  test('Deleção de Curso Inexistente', async () => {
    const deletado = await Cursos.deletarCurso(0);
    expect(deletado).toBeFalsy();
  });
});