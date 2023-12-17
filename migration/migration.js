require('dotenv').config({path: './src/configs/.env'});

const Crachas = require('../src/models/crachas.model.js');
const Cursos = require('../src/models/cursos.model.js');
const Usuarios = require('../src/models/usuarios.model.js');

const cursos = [
  { nome_curso: 'Técnico em Agente Comunitário de Saúde', modalidade_curso: 'técnico' },
  { nome_curso: 'Técnico em Agrimensura', modalidade_curso: 'técnico' },
  { nome_curso: 'Técnico em Aquicultura', modalidade_curso: 'técnico' },
  { nome_curso: 'Técnico em Desenvolvimento de Sistemas', modalidade_curso: 'técnico' },
  { nome_curso: 'Técnico em Design de Móveis e Interiores', modalidade_curso: 'técnico' },
  { nome_curso: 'Técnico em Edificações', modalidade_curso: 'técnico' },
  { nome_curso: 'Técnico em Eletrônica', modalidade_curso: 'técnico' },
  { nome_curso: 'Técnico em Eletrotécnica', modalidade_curso: 'técnico' },
  { nome_curso: 'Técnico em Estradas', modalidade_curso: 'técnico' },
  { nome_curso: 'Técnico em Eventos', modalidade_curso: 'técnico' },
  { nome_curso: 'Técnico em Geodésia e Cartografia', modalidade_curso: 'técnico' },
  { nome_curso: 'Técnico em Hospedagem', modalidade_curso: 'técnico' },
  { nome_curso: 'Técnico em Mecânica', modalidade_curso: 'técnico' },
  { nome_curso: 'Técnico em Metalurgia', modalidade_curso: 'técnico' },
  { nome_curso: 'Técnico em Mineração', modalidade_curso: 'técnico' },
  { nome_curso: 'Técnico em Pesca', modalidade_curso: 'técnico' },
  { nome_curso: 'Técnico em Química', modalidade_curso: 'técnico' },
  { nome_curso: 'Técnico em Saneamento', modalidade_curso: 'técnico' },
  { nome_curso: 'Técnico em Segurança do Trabalho', modalidade_curso: 'técnico' },
  { nome_curso: 'Técnico em Telecomunicação', modalidade_curso: 'técnico' },
  { nome_curso: 'Técnico em Turismo', modalidade_curso: 'técnico' },
  { nome_curso: 'Engenharia de Controle e Automação', modalidade_curso: 'graduação' },
  { nome_curso: 'Engenharia de Materiais', modalidade_curso: 'graduação' },
  { nome_curso: 'Engenharia Elétrica', modalidade_curso: 'graduação' },
  { nome_curso: 'Licenciatura em Ciências Biológicas', modalidade_curso: 'graduação' },
  { nome_curso: 'Licenciatura em Física', modalidade_curso: 'graduação' },
  { nome_curso: 'Licenciatura em Geografia', modalidade_curso: 'graduação' },
  { nome_curso: 'Licenciatura em História', modalidade_curso: 'graduação' },
  { nome_curso: 'Licenciatura em Letras', modalidade_curso: 'graduação' },
  { nome_curso: 'Licenciatura em Matemática', modalidade_curso: 'graduação' },
  { nome_curso: 'Licenciatura em Pedagogia', modalidade_curso: 'graduação' },
  { nome_curso: 'Licenciatura em Química', modalidade_curso: 'graduação' },
  { nome_curso: 'Tecnologia em Análise e Desenvolvimento de Sistemas', modalidade_curso: 'graduação' },
  { nome_curso: 'Tecnologia em Eletrotécnica Industrial', modalidade_curso: 'graduação' },
  { nome_curso: 'Tecnologia em Gestão de Saúde', modalidade_curso: 'graduação' },
  { nome_curso: 'Tecnologia em Gestão Hospitalar', modalidade_curso: 'graduação' },
  { nome_curso: 'Tecnologia em Gestão Pública', modalidade_curso: 'graduação' },
  { nome_curso: 'Tecnologia em Saneamento Ambiental', modalidade_curso: 'graduação' },
  { nome_curso: 'Tecnologia em Sistemas de Telecomunicações', modalidade_curso: 'graduação' }
];

const migration = async () => {
  try {
    console.log('Iniciando migração...');

    console.log('Criando tabela de usuário...');
    await Usuarios.sync({ force: true });
    console.log('Tabela de usuário criada.');

    console.log('Criando tabela de cursos...');
    await Cursos.sync({ force: true });
    console.log('Tabela de cursos criada.');

    console.log('Criando cursos...');
    await Cursos.bulkCreate(cursos);
    console.log('Cursos criados.');

    console.log('Criando tabela de crachás...');
    await Crachas.sync({ force: true });
    console.log('Tabela de crachás criada.');

    console.log('Migração finalizada.');
  } catch (error) {
    console.log(error);
  }
};

migration();