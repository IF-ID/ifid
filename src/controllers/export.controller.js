const path = require('path');
const fs = require('fs');
const { exportarJPG, exportarPDF } = require('../utils/exportarCrachas.util');
const exportarConfig = require('../configs/exportar.config');
const crachaUtil = require('../utils/crachas.util');
const cursosService = require('../services/cursos.service');

const exportJPG = async (req, res) => {
  const idCursos = new Set();
  if (typeof req.body.nomes === 'string') {
    idCursos.add(req.body.cursos);
  } else {
    req.body.cursos.forEach(curso => idCursos.add(curso));
  }

  const cursos = new Map();
  const cursosQuery = await cursosService.getCursos([...idCursos]);
  cursosQuery.forEach(curso => cursos.set(curso.id_curso, curso));

  const cards = [];
  if (typeof req.body.nomes === 'string') {
    const nome = req.body.nomes;
    const matricula = req.body.matriculas;
    const curso = parseInt(req.body.cursos);

    const card = {
      nome: nome,
      matricula: matricula,
      modalidade: cursos.get(curso).modalidade_curso,
      curso: cursos.get(curso).nome_curso
    }

    cards.push(card);
  } else {
    for (let [i, nome] of req.body.nomes.entries()) {
      const matricula = req.body.matriculas[i];
      const curso = parseInt(req.body.cursos[i]);

      const card = {
        nome: nome,
        matricula: matricula,
        modalidade: cursos.get(curso).modalidade_curso,
        curso: cursos.get(curso).nome_curso
      }

      cards.push(card);
    }
  }

  const imagemCrachas = await crachaUtil.criarCrachas(cards);

  const name = imagemCrachas.length > 1 ? 'crachas.zip' : 'cracha.jpg';

  const fileName = await exportarJPG(imagemCrachas);
  const filePath = path.join(__dirname, '../../', exportarConfig.exportPath, `jpg/${fileName}`)
  await res.download(filePath, name);
  setTimeout(() => {fs.unlinkSync(filePath)}, 1000 * 60 * 5);
}

const exportPDF = async (req, res) => {
  const idCursos = new Set();
  if (typeof req.body.nomes === 'string') {
    idCursos.add(req.body.cursos);
  } else {
    req.body.cursos.forEach(curso => idCursos.add(curso));
  }

  const cursos = new Map();
  const cursosQuery = await cursosService.getCursos([...idCursos]);
  cursosQuery.forEach(curso => cursos.set(curso.id_curso, curso));

  const cards = [];
  if (typeof req.body.nomes === 'string') {
    const nome = req.body.nomes;
    const matricula = req.body.matriculas;
    const curso = parseInt(req.body.cursos);

    const card = {
      nome: nome,
      matricula: matricula,
      modalidade: cursos.get(curso).modalidade_curso,
      curso: cursos.get(curso).nome_curso
    }

    cards.push(card);
  } else {
    for (let [i, nome] of req.body.nomes.entries()) {
      const matricula = req.body.matriculas[i];
      const curso = parseInt(req.body.cursos[i]);

      const card = {
        nome: nome,
        matricula: matricula,
        modalidade: cursos.get(curso).modalidade_curso,
        curso: cursos.get(curso).nome_curso
      }

      cards.push(card);
    }
  }

  const imagemCrachas = await crachaUtil.criarCrachas(cards);

  const name = imagemCrachas.length > 1 ? 'crachas.pdf' : 'cracha.pdf';

  const fileName = await exportarPDF(imagemCrachas);
  const filePath = path.join(__dirname, '../../', exportarConfig.exportPath, `pdf/${fileName}`)
  await res.download(filePath, name);
  setTimeout(() => {fs.unlinkSync(filePath)}, 1000 * 60);
}

module.exports = { exportJPG, exportPDF }