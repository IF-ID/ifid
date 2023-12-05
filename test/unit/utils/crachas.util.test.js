/*
  crachas.util.test.js

  Esse arquivo é responsável por armazenar os testes unitários do serviço de crachás.

  Requisito: [RF-U01] Criar Crachás

  Último Editor: Murilo

  Status: Finalizado

  Notas:
    As informações que serão utilizadas para a criação dos crachás são:
      Nome
      Matrícula
      Modalidade
      Curso
      Foto (Opcional)
*/

const { test } = require('@jest/globals');
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
}, 120000);

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
}, 120000);

test('Criar 2 Crachás', async () => {
  const crachas = await criarCrachas([
    {
      nome: 'murilo henrique conde da luz',
      matricula: '20202263816',
      modalidade: 'técnico',
      curso: 'desenvolvimento de sistemas',
      foto: 'https://static.wikia.nocookie.net/onepiece/images/a/af/Tony_Tony_Chopper_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20190113140816&path-prefix=pt'
    },
    {
      nome: 'Nathielly Neves De Castro',
      matricula: '20202263836',
      modalidade: 'técnico',
      curso: 'desenvolvimento de sistemas',  
    }
  ]);

  expect(Array.isArray(crachas)).toBe(true);
  expect(crachas.length).toBe(2);
  expect(isDataUri(crachas[0])).toBe(true);
  expect(isDataUri(crachas[1])).toBe(true);
  expect(crachas[0]).not.toBe(crachas[1]);
}, 120000);

test('Criar 5 Crachás', async () => {
  const crachas = await criarCrachas([
    {
      nome: 'murilo henrique conde da luz',
      matricula: '20202263816',
      modalidade: 'técnico',
      curso: 'desenvolvimento de sistemas',
      foto: 'https://static.wikia.nocookie.net/onepiece/images/a/af/Tony_Tony_Chopper_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20190113140816&path-prefix=pt'
    },
    {
      nome: 'Nathielly Neves De Castro',
      matricula: '20202263836',
      modalidade: 'técnico',
      curso: 'desenvolvimento de sistemas',  
    },
    {
      nome: 'João Miguel Rosa e Sousa',
      matricula: '20202263856',
      modalidade: 'técnico',
      curso: 'desenvolvimento de sistemas',  
    },
    {
      nome: 'Rodrigo Antônio Pinheiro Loureiro',
      matricula: '20202263820',
      modalidade: 'técnico',
      curso: 'desenvolvimento de sistemas',  
    },
    {
      nome: 'Elly',
      matricula: '20232263820',
      modalidade: 'técnico',
      curso: 'design',
    }
  ]);

  expect(Array.isArray(crachas)).toBe(true);
  expect(crachas.length).toBe(5);
  expect(isDataUri(crachas[0])).toBe(true);
  expect(isDataUri(crachas[1])).toBe(true);
  expect(isDataUri(crachas[2])).toBe(true);
  expect(isDataUri(crachas[3])).toBe(true);
  expect(isDataUri(crachas[4])).toBe(true);
}, 120000);