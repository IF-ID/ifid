const crachaUtil = require('../utils/crachas.util');
const cursosService = require('../services/cursos.service');

const gerarCrachas = async (req, res) => {
  const crachas = req.body;

  const idCursos = new Set();
  crachas.forEach(cracha => idCursos.add(cracha.curso));

  const cursos = new Map();
  const cursosQuery = await cursosService.getCursos([...idCursos]);
  cursosQuery.forEach(curso => cursos.set(curso.id_curso, curso));

  const data = [];

  crachas.forEach(cracha => {
    const curso = cursos.get(cracha.curso);
    data.push({
      nome: cracha.nome,
      matricula: cracha.matricula,
      curso: curso.nome_curso,
      modalidade: curso.modalidade_curso
    })
  });

  const imagemCrachas = await crachaUtil.criarCrachas(data);
  
  res.send(imagemCrachas);
}

module.exports = { gerarCrachas }