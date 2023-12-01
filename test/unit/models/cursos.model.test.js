/*
  cursos.model.test.js

  Esse arquivo testa o modelo da tabela de cursos do banco de dados.

  Requisito:

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/

require('dotenv').config({ path: './src/configs/.env' });

const { test } = require('@jest/globals');
const Cursos = require('../../../src/models/cursos.model.js');

test('Sincronização da Tabela de Cursos', async () => {
  let result = await Cursos.sync({ alter: true });
}, 30000);

test('Inserção de Curso', async () => {
  const cursos = [
    { nome: 'técnico em agente comunitário de saúde', modalidade: 'técnico' },
    { nome: 'técnico em agrimensura', modalidade: 'técnico' },
    { nome: 'técnico em aquicultura', modalidade: 'técnico' },
    { nome: 'técnico em desenvolvimento de sistemas', modalidade: 'técnico' },
    { nome: 'técnico em design de móveis e interiores', modalidade: 'técnico' },
    { nome: 'técnico em edificações', modalidade: 'técnico' },
    { nome: 'técnico em eletrônica', modalidade: 'técnico' },
    { nome: 'técnico em eletrotécnica', modalidade: 'técnico' },
    { nome: 'técnico em estradas', modalidade: 'técnico' },
    { nome: 'técnico em eventos', modalidade: 'técnico' },
    { nome: 'técnico em geodésia e cartografia', modalidade: 'técnico' },
    { nome: 'técnico em hospedagem', modalidade: 'técnico' },
    { nome: 'técnico em mecânica', modalidade: 'técnico' },
    { nome: 'técnico em metalurgia', modalidade: 'técnico' },
    { nome: 'técnico em mineração', modalidade: 'técnico' },
    { nome: 'técnico em pesca', modalidade: 'técnico' },
    { nome: 'técnico em química', modalidade: 'técnico' },
    { nome: 'técnico em saneamento', modalidade: 'técnico' },
    { nome: 'técnico em segurança do trabalho', modalidade: 'técnico' },
    { nome: 'técnico em telecomunicação', modalidade: 'técnico' },
    { nome: 'técnico em turismo', modalidade: 'técnico' },
    { nome: 'engenharia de controle e automação', modalidade: 'graduação' },
    { nome: 'engenharia de materiais', modalidade: 'graduação' },
    { nome: 'engenharia elétrica', modalidade: 'graduação' },
    { nome: 'licenciatura em ciências biológicas', modalidade: 'graduação' },
    { nome: 'licenciatura em física', modalidade: 'graduação' },
    { nome: 'licenciatura em geografia', modalidade: 'graduação' },
    { nome: 'licenciatura em história', modalidade: 'graduação' },
    { nome: 'licenciatura em letras - língua portuguesa', modalidade: 'graduação' },
    { nome: 'licenciatura em matemática', modalidade: 'graduação' },
    { nome: 'licenciatura em pedagogia', modalidade: 'graduação' },
    { nome: 'licenciatura em química', modalidade: 'graduação' },
    { nome: 'tecnologia em análise e desenvolvimento de sistemas', modalidade: 'graduação' },
    { nome: 'tecnologia em eletrotécnica industrial', modalidade: 'graduação' },
    { nome: 'tecnologia em gestão de saúde', modalidade: 'graduação' },
    { nome: 'tecnologia em gestão hospitalar', modalidade: 'graduação' },
    { nome: 'tecnologia em gestão pública', modalidade: 'graduação' },
    { nome: 'tecnologia em saneamento ambiental', modalidade: 'graduação' },
    { nome: 'tecnologia em sistemas de telecomunicações', modalidade: 'graduação' }
  ]

  for (let i = 0; i < cursos.length; i++) {
    let curso = await Cursos.create({
      nome_curso: cursos[i].nome,
      modalidade_curso: cursos[i].modalidade
    });
    expect(curso).toBeDefined();
  }
});

test('Modelo da Tabela de Cursos', async () => {
  let table = await Cursos.describe();

  expect(table).toHaveProperty('id_curso');
  expect(table).toHaveProperty('nome_curso');
  expect(table).toHaveProperty('modalidade_curso');
});