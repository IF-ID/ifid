const crachaUtil = require('../utils/crachas.util');
const cursosService = require('../services/cursos.service');

const gerarCracha = async (req, res) => { 
  const curso = await cursosService.getCurso(req.body.curso);
  const cracha = await crachaUtil.criarCrachas([{
    nome: req.body.nome,
    matricula: req.body.matricula,
    modalidade: curso.modalidade_curso,
    curso: curso.nome_curso
  }]);
  res.send(cracha[0]);
}

module.exports = { gerarCracha }