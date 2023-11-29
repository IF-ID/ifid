/*
  crachas.util.test.js

  Esse arquivo é responsável por armazenar os testes unitários do serviço de crachás.

  Requisito: [RF-U01] Criar Crachás

  Último Editor: Murilo

  Status: Em desenvolvimento

  Notas:
    As informações que serão utilizadas para a criação dos crachás são:
      Nome
      Matrícula
      Modalidade
      Curso
      Foto (Opcional)
*/

const { describe, test } = require('@jest/globals');
const { criarCrachas } = require('../../../src/utils/crachas.util.js');

const dataUriRegex = /^data:image\/\w+;base64,/;
const isDataUri = (dataUri) => dataUriRegex.test(dataUri);

test('Deve Retornar um Crachá como uma Array com 1 String de Data URI', async () => {
  const crachas = await criarCrachas([
    {
      nome: 'murilo henrique conde da luz',
      matricula: '20202263816',
      modalidade: 'técnico',
      curso: 'desenvolvimento de sistemas',
      foto: 'https://avatars.githubusercontent.com/u/60005589?v=4'
    }
  ]);

  expect(Array.isArray(crachas)).toBe(true);
  expect(crachas.length).toBe(1);
  expect(isDataUri(crachas[0])).toBe(true);
}, 30000);