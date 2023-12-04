/*
  exportarCrachas.util.test.js

  Esse arquivo é responsável por testar as funções utilitárias do serviço de exportação de crachás.

  Requisito:

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/

const puppeteer = require('puppeteer');
const exportOptions = require('../configs/exportar.config');
const path = require('path');
const fs = require('fs');

const options = {
  format: 'A4',
  orientation: 'portrait',
  margin: {
    top: '25px',
    bottom: '25px',
    left: '25px',
    right: '25px'
  }
};

const gerarPath = (nome) => {
  let id = 0;
  let filePath;

  while (true) {
    filePath = path.join(__dirname, '../../', exportOptions.exportPath, 'pdf/', `${nome}${id}.pdf`);
    
    if (!fs.existsSync(filePath)) break;
    id++;
  }

  return filePath;
}

gerarHtml = (crachas) => {
  let html = '';

  for (const cracha of crachas) {
    html += `<img src="${cracha}" style="width: 265px; height: 378px; border: 3px solid black; margin: 3px;"/>`;
  }

  html = `<html><body style="display: flex; flex-wrap: wrap;">${html}</body></html>`;

  return html;
} 

const exportarPDF = async (crachas) => {
  options.path = gerarPath('crachas');

  const html = gerarHtml(crachas);
    
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setContent(html);
  await page.pdf(options);
  await browser.close();

  return path.basename(options.path);
};

module.exports = { exportarPDF };