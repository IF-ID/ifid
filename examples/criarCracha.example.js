require('dotenv').config({ path: './src/configs/.env' });
const input = require('input');
const cursos = require('../src/services/cursos.service.js');
const exportOptions = require('../src/configs/exportar.config.js');
const path = require('path');
const { criarCrachas } = require('../src/utils/crachas.util.js');
const { exportarPDF, exportarJPG } = require('../src/utils/exportarCrachas.util.js');

const geraCracha = async () => {
  let dataCracha = {};

  dataCracha.nome = await input.text('Nome: ', { validate: (answer) => {
    if (answer.length == 0) return 'Nome não pode ser vazio';
    return true;
  }});

  dataCracha.matricula = await input.text('Matrícula: ', { validate: (answer) => {
    if (!/^\d{11}$/.test(answer)) return 'A matricula deve conter 11 dígitos';
    return true;
  }});

  const modalidades = await cursos.getModalidades();
  modalidades.map((modalidade, index) => {
    modalidades[index]  = modalidade.charAt(0).toUpperCase() + modalidade.slice(1).toLowerCase()
  });
  
  dataCracha.modalidade = await input.select('Modalidade: ', modalidades);

  const cursosModalidade = await cursos.getCursosByModalidade(dataCracha.modalidade);
  cursosModalidade.map((curso, index) => {
    cursosModalidade[index] = curso.nome_curso.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  });

  dataCracha.curso = await input.select('Curso: ', cursosModalidade);

  console.log('\nGerando crachá...');
  const cracha = await criarCrachas([dataCracha]);
  console.log('Crachá gerado com sucesso!\n');
  
  console.log('Salvando crachá como JPG...');
  const jpgName = await exportarJPG(cracha);
  const jpgPath = path.join(exportOptions.exportPath, 'jpg/', jpgName);
  console.log(`JPG salvo em ${jpgPath}\n`);

  console.log('Salvando crachá como PDF...');
  const pdfName = await exportarPDF(cracha);
  const pdfPath = path.join(exportOptions.exportPath, 'pdf/', pdfName);
  console.log(`PDF salvo em ${pdfPath}\n`);

  const mostrarDataUri = await input.confirm('Mostrar crachá?');
  if (mostrarDataUri) {
    console.log(cracha[0]);
  }
};

geraCracha();