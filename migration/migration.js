require('dotenv').config({path: './src/configs/.env'});

const Crachas = require('../src/models/crachas.model.js');
const Cursos = require('../src/models/cursos.model.js');
const Usuarios = require('../src/models/usuarios.model.js');

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