/*
  cursos.model.test.js

  Esse arquivo testa o modelo da tabela de cursos do banco de dados.

  Requisito:

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/

require('dotenv').config({ path: './src/configs/.env' });

const { describe, test } = require('@jest/globals');
const Cursos = require('../../../src/models/cursos.model.js');

const cursos = [
  { nome_curso: 'técnico em agente comunitário de saúde', modalidade_curso: 'técnico' },
  { nome_curso: 'técnico em agrimensura', modalidade_curso: 'técnico' },
  { nome_curso: 'técnico em aquicultura', modalidade_curso: 'técnico' },
  { nome_curso: 'técnico em desenvolvimento de sistemas', modalidade_curso: 'técnico' },
  { nome_curso: 'técnico em design de móveis e interiores', modalidade_curso: 'técnico' },
  { nome_curso: 'técnico em edificações', modalidade_curso: 'técnico' },
  { nome_curso: 'técnico em eletrônica', modalidade_curso: 'técnico' },
  { nome_curso: 'técnico em eletrotécnica', modalidade_curso: 'técnico' },
  { nome_curso: 'técnico em estradas', modalidade_curso: 'técnico' },
  { nome_curso: 'técnico em eventos', modalidade_curso: 'técnico' },
  { nome_curso: 'técnico em geodésia e cartografia', modalidade_curso: 'técnico' },
  { nome_curso: 'técnico em hospedagem', modalidade_curso: 'técnico' },
  { nome_curso: 'técnico em mecânica', modalidade_curso: 'técnico' },
  { nome_curso: 'técnico em metalurgia', modalidade_curso: 'técnico' },
  { nome_curso: 'técnico em mineração', modalidade_curso: 'técnico' },
  { nome_curso: 'técnico em pesca', modalidade_curso: 'técnico' },
  { nome_curso: 'técnico em química', modalidade_curso: 'técnico' },
  { nome_curso: 'técnico em saneamento', modalidade_curso: 'técnico' },
  { nome_curso: 'técnico em segurança do trabalho', modalidade_curso: 'técnico' },
  { nome_curso: 'técnico em telecomunicação', modalidade_curso: 'técnico' },
  { nome_curso: 'técnico em turismo', modalidade_curso: 'técnico' },
  { nome_curso: 'engenharia de controle e automação', modalidade_curso: 'graduação' },
  { nome_curso: 'engenharia de materiais', modalidade_curso: 'graduação' },
  { nome_curso: 'engenharia elétrica', modalidade_curso: 'graduação' },
  { nome_curso: 'licenciatura em ciências biológicas', modalidade_curso: 'graduação' },
  { nome_curso: 'licenciatura em física', modalidade_curso: 'graduação' },
  { nome_curso: 'licenciatura em geografia', modalidade_curso: 'graduação' },
  { nome_curso: 'licenciatura em história', modalidade_curso: 'graduação' },
  { nome_curso: 'licenciatura em letras - língua portuguesa', modalidade_curso: 'graduação' },
  { nome_curso: 'licenciatura em matemática', modalidade_curso: 'graduação' },
  { nome_curso: 'licenciatura em pedagogia', modalidade_curso: 'graduação' },
  { nome_curso: 'licenciatura em química', modalidade_curso: 'graduação' },
  { nome_curso: 'tecnologia em análise e desenvolvimento de sistemas', modalidade_curso: 'graduação' },
  { nome_curso: 'tecnologia em eletrotécnica industrial', modalidade_curso: 'graduação' },
  { nome_curso: 'tecnologia em gestão de saúde', modalidade_curso: 'graduação' },
  { nome_curso: 'tecnologia em gestão hospitalar', modalidade_curso: 'graduação' },
  { nome_curso: 'tecnologia em gestão pública', modalidade_curso: 'graduação' },
  { nome_curso: 'tecnologia em saneamento ambiental', modalidade_curso: 'graduação' },
  { nome_curso: 'tecnologia em sistemas de telecomunicações', modalidade_curso: 'graduação' }
]

describe('Testes do Modelo da Tabela de Cursos', () => {
  test('Modelo da Tabela de Cursos', async () => {
    let table;

    try {
      table = await Cursos.describe();
    } catch (error) {
      if (process.env.CREATE_TABLES == 'true') {
        console.log('Criando tabela de cursos...');
        await Cursos.sync({ alter: true });
        table = await Cursos.describe();
      } else {
        console.log('Tabela de cursos não existe. Ative a opção CREATE_TABLES no arquivo .env para criar a tabela.');
        throw error;
      }
    } 

    expect(table).toHaveProperty('id_curso');
    expect(table).toHaveProperty('nome_curso');
    expect(table).toHaveProperty('modalidade_curso');
  });


  test('Verificar a Existência dos Cursos Padrão', async () => {
    let notCreated = [];

    let cursosQuery = await Cursos.findAll();

    cursos.forEach(curso => {
      for (c of cursosQuery) {
        if (curso.nome_curso == c.nome_curso) {
          return
        }
      }
      notCreated.push(curso);
    })

    if (notCreated.length > 0) {
      console.log('Cursos não encontrados:');
      console.log(notCreated);

      if (process.env.CREATE_TABLES == 'true') {
        console.log('Criando cursos padrão...');
        await Cursos.bulkCreate(cursos);
      } else {
        console.log('Cursos não encontrados. Ative a opção CREATE_TABLES no arquivo .env para criar os cursos padrão.');
        throw new Error('Cursos não encontrados.');
      }
    }
  });
});