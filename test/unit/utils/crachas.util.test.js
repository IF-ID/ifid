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

test('Criar 1 Crachá com Todos os Dados', async () => {
  const crachas = await criarCrachas([
    {
      nome: 'murilo henrique conde da luz',
      matricula: '20202263816',
      modalidade: 'técnico',
      curso: 'desenvolvimento de sistemas',
      foto: 'https://static.wikia.nocookie.net/onepiece/images/a/af/Tony_Tony_Chopper_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20190113140816&path-prefix=pt'
    }
  ]);

  expect(Array.isArray(crachas)).toBe(true);
  expect(crachas.length).toBe(1);
  expect(isDataUri(crachas[0])).toBe(true);
}, 60000);

test('Criar 1 Crachá sem Dados Opcionais', async () => {
  const crachas = await criarCrachas([
    {
      nome: 'murilo henrique conde da luz',
      matricula: '20202263816',
      modalidade: 'técnico',
      curso: 'desenvolvimento de sistemas'
    }
  ]);

  expect(Array.isArray(crachas)).toBe(true);
  expect(crachas.length).toBe(1);
  expect(isDataUri(crachas[0])).toBe(true);
}, 60000);