/*
  crachas.util.js

  Esse arquivo é responsável por armazenar as funções utilitárias do serviço de crachás.

  Requisito: [RF-U01] Criar Crachás

  Último Editor: Murilo

  Status: Em desenvolvimento

  Notas:
    Falta criar o template do Crachá
*/

const options = require('../configs/crachas.config');
const puppeteer = require('puppeteer');
const fs = require('fs');

const gerarHtml = (aluno) => {
  const { nome, matricula, modalidade, curso, foto } = aluno;
  const crachaTemplate = fs.readFileSync(options.templatePath).toString();

  return crachaTemplate
    .replace('{{nome}}', nome)
    .replace('{{matricula}}', matricula)
    .replace('{{modalidade}}', modalidade)
    .replace('{{curso}}', curso)
    .replace('{{barcode}}', `https://barcode.orcascan.com/?type=code128&data=${matricula}`)
    .replace('{{foto}}', foto ?? options.imagePlaceholder);
}

/* Essa Função  */
const criarCrachas = async (alunos) => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({
    width: 265,
    height: 378,
    deviceScaleFactor: 1,
  });
  
  const crachas = [];
  
  for (const aluno of alunos) {
    let html = gerarHtml(aluno);
    await page.setContent(html);
    let image = await page.screenshot({ encoding: 'base64' });
    console.log(`data:image/jpeg;base64,${image}`);
    crachas.push(`data:image/jpeg;base64,${image}`);
  }

  await browser.close();

  return crachas;
}

module.exports = {
  gerarHtml,
  criarCrachas
};