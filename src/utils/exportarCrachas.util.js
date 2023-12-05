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
const JSZip = require('jszip');

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

const gerarPath = (nome, extensao, diretorio) => {
  let id = 0;
  let filePath;

  while (true) {
    filePath = path.join(__dirname, '../../', exportOptions.exportPath, `${diretorio}/`, `${nome}${id}.${extensao}`);
    
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
  options.path = gerarPath('crachas', 'pdf', 'pdf');
  const diretorios = path.dirname(options.path);

  if (!fs.existsSync(diretorios)){
    fs.mkdirSync(diretorios, { recursive: true });
  }

  const html = gerarHtml(crachas);
    
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setContent(html);
  await page.pdf(options);
  await browser.close();

  return path.basename(options.path);
};

const exportar1Jpg = async (dataURI) => {
  const filePath = gerarPath('crachas', 'jpg', 'jpg');
  const diretorios = path.dirname(filePath);
  if (!fs.existsSync(diretorios)){
    fs.mkdirSync(diretorios, { recursive: true });
  }
  fs.writeFileSync(filePath, Buffer.from(dataURI.split(',')[1], 'base64'));
  return filePath;
}

const exportarJPG = async (crachas) => {
  if (crachas.length === 1) {
    return path.basename(await exportar1Jpg(crachas[0]));
  }

  const filePath = gerarPath('crachas', 'zip', 'jpg');
  const diretorios = path.dirname(filePath);
  if (!fs.existsSync(diretorios)){
    fs.mkdirSync(diretorios, { recursive: true });
  }

  const zip = new JSZip();

  for (let [i, dataURI] of crachas.entries()) {
    zip.file(`cracha${i}.jpg`, Buffer.from(dataURI.split(',')[1], 'base64'));
  }

  const content = await zip.generateAsync({ type: 'nodebuffer' });
  fs.writeFileSync(filePath, content); 
  return path.basename(filePath);
}

module.exports = { exportarPDF, exportarJPG };